CREATE TABLE IF NOT EXISTS salasdeaula (
    salasdeaulaid INTEGER PRIMARY KEY,
    descricao TEXT NOT NULL,
    localizacao TEXT NOT NULL,
    capacidade INTEGER NOT NULL,
    removido INTEGER NOT NULL DEFAULT 0
);