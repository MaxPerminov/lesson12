from model.Users.user import User
from utils.toJSON import toJSON


people = toJSON([
    User("k@i.ua", "John", "2323"),
    User("m@i.ua", "Mike", "1241"),
    User("b@i.ua", "Bob", "1242"),
    User("d@i.ua", "Doe", "42112")
])