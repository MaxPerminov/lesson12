from model.Product.product import Product
from utils.toJSON import toJSON

items = toJSON([
    Product("Samsung", 2000, "https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$", "Smartphone"),
    Product("Samsung", 12000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqVBl87anNOMxwPuNqYkP1Nci9qVmRgZL6g&usqp=CAU", "TV"),
    Product("Samsung", 15000, "https://images.samsung.com/is/image/samsung/assets/us/refrigerators/productcard/04_Productcard_Familyhub_MO_2.png?$192_192_PNG$", "Fridge")
])