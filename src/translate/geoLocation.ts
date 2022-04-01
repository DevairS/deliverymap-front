export default function translateErrorGeolocation(codeError: number): string {
  switch (codeError) {
    case 1:
      return 'Geolocalização negada pelo usuário';
    case 2:
      return 'Geolocalização não encontrada';
    case 3:
      return 'Tempo para busca da geolocalização excedido';
    default:
      return 'Erro ao buscar geolocalização';
  }
}
