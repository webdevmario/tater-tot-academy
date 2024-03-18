from fastapi import FastAPI

app = FastAPI()

BOOKS = [
    {
        'title': 'The Pragmatic Programmer', 'author': 'Andrew Hunt, David Thomas', 'category': 'programming'
    },
    {
        'title': 'Clean Code', 'author': 'Robert C. Martin', 'category': 'programming'
    },
    {
        'title': 'The Lean Startup', 'author': 'Eric Ries', 'category': 'business'
    },
    {
        'title': 'Building Microservices', 'author': 'Sam Newman', 'category': 'programming'
    },
    {
        'title': 'The Mythical', 'author': 'Fred Brooks', 'category': 'programming'
    },
    {
        'title': 'The Phoenix Project', 'author': 'Gene Kim, Kevin Behr, George Spafford', 'category': 'business'
    },
    {
        'title': 'The Goal', 'author': 'Eliyahu M. Goldratt, Jeff Cox', 'category': 'business'
    },
    {
        'title': 'The Art of Computer Programming', 'author': 'Donald E. Knuth', 'category': 'programming'
    },
    {
        'title': 'The Design of Everyday Things', 'author': 'Donald A. Norman', 'category': 'design'
    },
    {
        'title': 'Don’t Make Me Think', 'author': 'Steve Krug', 'category': 'design'
    }
]

@app.get("/books")
async def read_all_books():
    return BOOKS
    # return { "message": "Hello Mario" }

@app.get("/books/{book_title}")
async def read_book(book_title: str):
    for book in BOOKS:
        if book_title.casefold() in book['title'].casefold():
            return book

# dictionary and usage of uvicorn (used in other projects)
# dictionary is like an object and list is like an array