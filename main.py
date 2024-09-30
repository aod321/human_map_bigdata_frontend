from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源，仅在开发环境中使用
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)