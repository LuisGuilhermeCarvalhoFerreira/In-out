import { useNavigate, useParams } from "react-router-dom";

const destinosData = [
  {
    id: 1,
    nome: "Paris",
    pais: "França",
    bandeira: "🇫🇷",
    categoria: "Urbano",
    nota: "4.9",
    precoMedio: "R$ 3.500",
    melhorEpoca: "Primavera (Abr-Jun)",
    tagStatus: "Mais procurado",
    dadosSocial: "12 mil pessoas visitaram este mês",
    imagem:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    nome: "Tóquio",
    pais: "Japão",
    bandeira: "🇯🇵",
    categoria: "Luxo",
    nota: "5.0",
    precoMedio: "R$ 5.200",
    melhorEpoca: "Outono (Out-Nov)",
    tagStatus: "Tendência de 2026",
    dadosSocial: "Mais reservado da semana",
    imagem:
      "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    nome: "Santorini",
    pais: "Grécia",
    bandeira: "🇬🇷",
    categoria: "Praia",
    nota: "4.8",
    precoMedio: "R$ 4.100",
    melhorEpoca: "Verão (Jun-Set)",
    tagStatus: "Mais procurado",
    dadosSocial: "Alta temporada",
    imagem:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: 4,
    nome: "Rio de Janeiro",
    pais: "Brasil",
    bandeira: "🇧🇷",
    categoria: "Econômico",
    nota: "4.7",
    precoMedio: "R$ 800",
    melhorEpoca: "Inverno (Jun-Ago)",
    tagStatus: "Preço Imperdível",
    dadosSocial: "8 mil buscas hoje",
    imagem:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&auto=format&fit=crop&q=85",
  },
];

export default function DetalhesDestino() {
  const { id } = useParams();
  const navigate = useNavigate();

  const destino = destinosData.find(
    (item) => item.id === Number(id)
  );

  if (!destino) {
    return (
      <main className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl mb-5">🏕️</div>

          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Destino não encontrado
          </h1>

          <p className="text-gray-500 mb-7">
            Não conseguimos encontrar esse destino.
          </p>

          <button
            onClick={() => navigate("/destinos")}
            className="bg-[#2f592c] hover:bg-[#244622] text-white px-7 py-3 rounded-xl font-bold transition"
          >
            ← Voltar para destinos
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f7f5] via-[#f9f9f7] to-[#f5f5f2] pb-20">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* VOLTAR */}
        <button
          onClick={() => navigate("/destinos")}
          className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#2f592c] font-semibold mb-10 transition duration-300"
        >
          <span className="text-xl group-hover:-translate-x-1 transition duration-300">
            ←
          </span>
          <span>Voltar para destinos</span>
        </button>

        {/* HERO SECTION */}
        <section className="relative h-[320px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl mb-12">

          <img
            src={destino.imagem}
            alt={`Imagem de ${destino.nome}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />

          {/* GRADIENTE SOFISTICADO */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent opacity-90" />

          {/* TAG STATUS COM EFEITO GLASSMORPHISM */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:bg-white/30 transition duration-300">
              ✨ {destino.tagStatus}
            </span>
          </div>

          {/* HERO TEXT - POSICIONAMENTO OTIMIZADO */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 py-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl md:text-4xl">{destino.bandeira}</span>
                <span className="text-base sm:text-lg text-gray-100 font-medium">{destino.pais}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                {destino.nome}
              </h1>
            </div>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10">

          {/* COLUNA ESQUERDA - CONTEÚDO PRINCIPAL */}
          <section className="space-y-10">

            {/* BADGES DESTACADOS */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white border border-gray-200/50 shadow-sm hover:shadow-md transition duration-300 px-5 py-3 rounded-full">
                <span className="text-sm font-bold text-gray-800">
                  <span className="text-lg">⭐</span> {destino.nota} / 5.0
                </span>
              </div>

              <div className="bg-gradient-to-r from-[#e7efe5] to-[#d4e8cf] text-[#1a4d1a] px-5 py-3 rounded-full font-bold shadow-sm">
                🎯 {destino.categoria}
              </div>

              <div className="bg-white border border-gray-200/50 shadow-sm px-5 py-3 rounded-full">
                <span className="text-sm text-gray-600">
                  👥 <span className="font-semibold">{destino.dadosSocial}</span>
                </span>
              </div>
            </div>

            {/* SEÇÃO SOBRE */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Sobre <span className="text-[#2f592c]">{destino.nome}</span>
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-light">
                Descubra uma experiência inesquecível em{" "}
                <span className="font-bold text-gray-900">{destino.nome}</span>. Explore os principais pontos
                turísticos, conheça a cultura local e aproveite tudo que{" "}
                <span className="font-bold text-gray-900">{destino.pais}</span> tem para oferecer. Cada momento será marcado por paisagens espetaculares, vivências autênticas e memórias que durarão para sempre.
              </p>
            </div>

            {/* CARDS DE INFORMAÇÕES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* CARD MELHOR ÉPOCA */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200/50 shadow-sm hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e7efe5] to-[#d4e8cf] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition duration-300">
                  🌿
                </div>

                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">
                  Melhor época para visitar
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {destino.melhorEpoca}
                </p>

                <div className="mt-4 text-sm text-gray-600 font-light">
                  Clima ideal para aproveitar ao máximo
                </div>
              </div>

              {/* CARD LOCALIZAÇÃO */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200/50 shadow-sm hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e7efe5] to-[#d4e8cf] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition duration-300">
                  📍
                </div>

                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">
                  Localização
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {destino.pais}
                </p>

                <div className="mt-4 text-sm text-gray-600 font-light">
                  Coordenadas geográficas perfeitas
                </div>
              </div>

            </div>

          </section>

          {/* SIDEBAR - CARD DE RESERVA STICKY */}
          <aside className="lg:col-start-2 lg:row-start-1">
            <div className="bg-white rounded-3xl border border-gray-200/50 shadow-2xl p-8 lg:sticky lg:top-8 backdrop-blur-sm bg-opacity-98">

              {/* CABEÇALHO */}
              <div className="mb-8">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">
                  💰 Estimativa da viagem
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#2f592c] to-[#1a4d1a] bg-clip-text text-transparent">
                    {destino.precoMedio}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">
                    por pessoa
                  </span>
                </div>
              </div>

              {/* DIVISOR */}
              <div className="border-t border-gray-200/50 pt-8 pb-8">

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                      Destino
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {destino.nome}
                    </p>
                  </div>
                  <span className="text-4xl">
                    {destino.bandeira}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">
                    Avaliação média
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ⭐ {destino.nota}
                  </span>
                </div>

              </div>

              {/* CTA BUTTON */}
              <button
                onClick={() =>
                  alert(`Reserva iniciada para ${destino.nome}!`)
                }
                className="w-full bg-gradient-to-r from-[#2f592c] to-[#1a4d1a] hover:from-[#244622] hover:to-[#133d0f] text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>✈️</span>
                <span>Reservar agora</span>
              </button>

              {/* DISCLAIMER */}
              <p className="text-center text-xs text-gray-500 mt-5 font-medium">
                🔒 Você não será cobrado nesta demonstração.
              </p>

              {/* FEATURES ADICIONAIS */}
              <div className="mt-8 pt-8 border-t border-gray-200/30 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">🛂</span>
                  <span className="text-gray-700 font-medium">Suporte completo com vistos</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">🏨</span>
                  <span className="text-gray-700 font-medium">Hospedagem 5 estrelas</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">🎒</span>
                  <span className="text-gray-700 font-medium">Roteiro personalizado</span>
                </div>
              </div>

            </div>
          </aside>

        </div>

      </div>

    </main>
  );
}