from flask_wtf import FlaskForm
from wtforms import RadioField, SubmitField, StringField, PasswordField, IntegerField, DecimalField,SelectField ,FileField # File field : https://wtforms.readthedocs.io/en/2.3.x/fields/
from wtforms.validators import InputRequired, EqualTo, NumberRange, Optional, DataRequired  
from wtforms.widgets import TextArea #widget and how to use found from https://stackoverflow.com/questions/60020791/how-to-have-new-line-multi-line-input-in-flask-wtf-wtforms-string-field
from flask_wtf.file import FileRequired #taken from Chatgpt



class RegistrationForm(FlaskForm):
    user_id = StringField("User id:", validators=[InputRequired()])
    password = PasswordField("Password:", validators=[InputRequired()])
    password2 = PasswordField("Repeat Password:", validators=[InputRequired(), EqualTo('password')])
    submit = SubmitField('Submit')


class LoginForm(FlaskForm):
    user_id = StringField("User id:", validators=[InputRequired()])
    password = PasswordField("Password:", validators=[InputRequired()])
    submit = SubmitField('Submit')

class FilterForm(FlaskForm):
    sport = RadioField('Filter by sport:', choices=["Football", "Basketball", "Apparel", "Badminton", "Boxing", "Swimming", "Golf", "Gym Equipment"], validators=[Optional()]) #Optional found from https://wtforms.readthedocs.io/en/2.3.x/validators/
    price = RadioField('Filter by price:', choices=['Low to High', 'High to Low'], validators=[Optional()])
    min_price = DecimalField('Min price (eur)', validators=[Optional()])
    max_price = DecimalField('Max price (eur)', validators=[Optional()])
    search = StringField('Search:', validators=[Optional()])
    submit = SubmitField('Apply')


class Clear(FlaskForm):
    clear = SubmitField('Clear Filters')

class QuantityForm(FlaskForm):
    quantity = IntegerField('Quantity:', validators=[NumberRange(1, 100)], default=1)
    submit = SubmitField('Add to cart')

class RemoveForm(FlaskForm):
    quantity = IntegerField('Quantity:', validators=[NumberRange(1,100)], default=1)
    submit = SubmitField('Remove from cart')

class PurchaseForm(FlaskForm):
    submit = SubmitField('Purchase')

class ReviewForm(FlaskForm):
    review = StringField('Leave a review?', validators=[DataRequired()], widget=TextArea() )
    rating = IntegerField('Give a rating out of 5', validators=[NumberRange(1, 5), InputRequired()])
    review_submit = SubmitField()

class EditReviewForm(FlaskForm):
    edit_review = StringField('Edit Review', widget=TextArea())
    submit = SubmitField()

class AddFundsForm(FlaskForm):
    amount = DecimalField('Add funds to wallet? (Limit: $10,000)', validators=[InputRequired(), NumberRange(0.01,10000)])
    submit = SubmitField('Add funds to wallet')

class DiscountForm(FlaskForm):
    discount_code = StringField('Enter Discount Code', validators=[InputRequired()])
    apply_discount = SubmitField('Apply Discount')


class changePasswordForm(FlaskForm):
    password = PasswordField("Current Password:", validators=[InputRequired()])
    password2 = PasswordField("New Password:", validators=[InputRequired()])
    password3 = PasswordField("Repeat New Password:", validators=[InputRequired(), EqualTo('password2')])
    submit = SubmitField('Submit')

class DeleteUserForm(FlaskForm):
    submit = SubmitField('Delete User')

class ProductForm(FlaskForm):
    name = StringField('Product name', validators=[InputRequired()])
    category = SelectField('Product category',choices=["Football", "Basketball", "Apparel", "Badminton", "Boxing", "Swimming", "Golf", "Gym Equipment"], validators=[InputRequired()])
    price = DecimalField('Price(USD)', validators=[InputRequired()])
    stock = IntegerField('Amount in stock', validators=[InputRequired(), NumberRange(1,100)])
    description = StringField('Description', validators=[InputRequired()])
    image = FileField('Upload an image', validators=[FileRequired()])
    submit = SubmitField('Add new product')

class EditProductForm(FlaskForm):
    name = StringField('Product name', validators=[Optional()])
    category = SelectField('Product category',choices=["Football", "Basketball", "Apparel", "Badminton", "Boxing", "Swimming", "Golf", "Gym Equipment"], validators=[Optional()])
    price = DecimalField('Price(USD)', validators=[Optional()])
    stock = IntegerField('Amount in stock', validators=[Optional()])
    description = StringField('Description', validators=[Optional()])
    image = FileField('Upload an image', validators=[Optional()])
    submit = SubmitField('Edit product', validators=[Optional()])

class DeleteProductForm(FlaskForm):
    submit = SubmitField('Delete Product')

class UserRequestForm(FlaskForm):
    request = StringField('Submit a ticket to admin' , validators=[InputRequired()], widget=TextArea())
    submit = SubmitField()

class ResponseForm(FlaskForm):
    response = StringField(validators=[InputRequired()], widget=TextArea())
    submit = SubmitField('Submit response')