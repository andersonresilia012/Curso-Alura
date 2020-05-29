import React, { Component } from 'react';

const Tablehead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => { props.removeAutor(index) }} className="waves-effect indigo lighten-2 waves-light btn">Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {

        const { autores, removeAutor } = this.props;
        console.log(autores)

        return (
            <table className="centered highlight">
                <Tablehead />
                <TableBody autores={autores} removeAutor = {removeAutor} />
            </table>
        );
    }
}
export default Tabela;