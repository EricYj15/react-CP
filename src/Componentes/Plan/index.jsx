import Planos from "../Planos";


function Plan({ plan }) {

  const habilidades1 = [
    {
      titulo: "Youtube",
      icone: "/public/y.png",
      conteudo: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      color: "#F1C2B0"
    },
    {
      titulo: "Tiktok",
      icone: "/public/t.png",
      conteudo: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      tempoxp: "1 meses",
      color: "#F9EB98",

    },
    {
      titulo: "Facebook",
      icone: "/public/f.png",
      conteudo: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      tempoxp: "0 meses",
      color: "#C0D9DD"
    },
    {
      titulo: "Instagram",
      icone: "/public/i.png",
      conteudo: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      tempoxp: "0 meses",
      color: "#6975E8"
    },
  ]

  return (
    <div className="skills">
      <Planos dados={habilidades1} />
    </div>
  );
}

export default Plan;
