# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START app]
import logging
import os

# [START imports]
from flask import Flask, render_template, request, jsonify, flash
from flask_cors import CORS, cross_origin
# [END imports]

UPLOAD_FOLDER = '/uploads'

# [START create_app]
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# [END create_app]

# [START image_api]

def secure_filename(filename):
    return 'image_' + filename

@app.route('/api/v1/understand_image', methods=['GET', 'POST'])
def understand_image():
    if request.method == 'POST':
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            print 'No selected file'
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            return jsonify({
                    'status': 'OK',
                    'result': 'onemli..',
                    'filename': file.filename,
                    'content_length': file.content_length,
                    'content_type': file.content_type
                })

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data action=/api/v1/understand_image>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''
# [END image_api]


# [START form]
@app.route('/')
def form():
    return render_template('form.html')
# [END form]


# [START submitted]
@app.route('/submitted', methods=['POST'])
def submitted_form():
    name = request.form['name']
    email = request.form['email']
    site = request.form['site_url']
    comments = request.form['comments']

    # [END submitted]
    # [START render_template]
    return render_template(
        'submitted_form.html',
        name=name,
        email=email,
        site=site,
        comments=comments)
    # [END render_template]


@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]