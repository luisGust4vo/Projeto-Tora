CREATE TABLE db_tora.colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    tipo_acesso int NOT NULL,
    equipe int
);


INSERT INTO db_tora.tipo_acesso (acesso) VALUES
    ('Lider'),
    ('Colaborador'),
    ('Administrador');



INSERT INTO db_tora.equipes (equipe) VALUES
    ('Omega'),
    ('Beta'),
    ('Delta'),
    ('Gama');

CREATE TABLE db_tora.mensagem_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    mensagem TEXT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP
);