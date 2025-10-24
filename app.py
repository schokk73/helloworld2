from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World from Suhas Chokkaku!'

@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/about-css')
def about_css():
    return render_template('about-css.html')

@app.route('/greeting')
def greeting():
    return render_template('greeting.html')

@app.route('/favorite-course')
def favorite_course():
    # Access GET parameters from the URL
    subject = request.args.get('subject')
    course_number = request.args.get('course_number')
    return render_template('favorite-course.html',
                           subject=subject,
                           course_number=course_number)
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == "POST":
        # Pull values from the submitted form
        first = request.form.get("first_name")
        last = request.form.get("last_name")
        email = request.form.get("email")
        major = request.form.get("major")  # your “extra” field

        return render_template(
            "contact.html",
            first=first,
            last=last,
            email=email,
            major=major,
            submitted=True  # used in Jinja to switch views
        )

        # GET request — just show the blank form
    return render_template("contact.html", submitted=False)


if __name__ == '__main__':
    app.run()
    #app.run(host="127.0.0.1", port=5000,debug=True)
