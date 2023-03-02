from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

task_list = []
task_id_counter = 0


@app.route('/tasks', methods=['GET'])
@cross_origin()
def fetch_tasks():
    return task_list

@app.route('/tasks', methods=['POST'])
@cross_origin()
def add_task():
    global task_id_counter
    request_data = request.get_json()
    task_list.append(
        {'id': task_id_counter, 
         'title': request_data['title'],
         'completed': False})
    task_id_counter += 1
    return jsonify(isError= False,
                    message= "Success",
                    statusCode= 200), 200
    

@app.route('/tasks/<id>', methods=['PATCH'])
@cross_origin()
def update_task_status(id):
    global task_list 
    request_data = request.get_json()
    for index, item in enumerate(task_list):
        if str(item['id']) == id:
            if 'title' in request_data.keys():
                title = request_data['title']
            else:
                title = item['title'] 
            if 'completed' in request_data.keys():
                completed = request_data['completed']
            else:
                completed = item['completed'] 
            task_list[index] = {'id': item['id'], 
                                'title': title,
                                'completed': completed}
            return jsonify(isError= False,
                    message= "Success",
                    statusCode= 200), 200
        


@app.route('/tasks/<id>', methods=['DELETE'])
@cross_origin()
def delete_task(id):
    global task_list 
    for index, item in enumerate(task_list):
        if str(item['id']) == id:
            del task_list[index]
            return jsonify(isError= False,
                    message= "Success",
                    statusCode= 200), 200


if __name__ == '__main__':
    app.run()