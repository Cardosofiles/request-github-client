type Props = {
  message: string
}

export function ErrorMessage({ message }: Props) {
  return <p className="text-red-500 text-center">Erro: {message}</p>
}
