from fastapi import FastAPI
from .routes.curriculo import router as curriculo_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="miragen", description="um projeto legal")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    curriculo_router,
    prefix="/curriculo",
    tags=["Curriculo"]
)

@app.get("/")
def home():
    return