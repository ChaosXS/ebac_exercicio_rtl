import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './'; // Certifique-se de que este caminho aponta para o index.tsx acima

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComment />);

        // Inserção do primeiro comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Primeiro comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('botao-comentario'));

        // Inserção do segundo comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Segundo comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('botao-comentario'));

        // Validação: verifica se existem dois itens na lista
        const itensComentario = screen.getAllByTestId('item-comentario');
        expect(itensComentario).toHaveLength(2);
        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
    });
});