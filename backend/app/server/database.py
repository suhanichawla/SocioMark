import motor.motor_asyncio
from dotenv import dotenv_values, find_dotenv

config = dotenv_values(find_dotenv())

MONGO_DETAILS = config["MONGODB_URL"]

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.users

users_collection = database.get_collection("users_collection")
posts_collection = database.get_collection("posts_collection")
likes_collection = database.get_collection("likes_collection")
comments_collection = database.get_collection("comments_collection")
