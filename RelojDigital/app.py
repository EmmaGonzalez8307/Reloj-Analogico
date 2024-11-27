
from flask import Flask, render_template
import time

app = Flask(__name__)

@app.route('/')
def index():
    # Para obtener la hora actual
    current_time = time.strftime('%H:%M:%S')  # Te da formato de 24 horas
    return render_template('index.html', current_time=current_time)

if __name__ == '__main__':
    app.run(debug=True)
