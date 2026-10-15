import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import { Footer, PublicHeader } from '../components/layout';

const heroPremium = 'https://www.purissima.com/assets/images/quarta-imagem-carroseul.png';
const kitPremium = 'https://www.purissima.com/assets/images/kit-premium-modal.png';
const unboxingPremium = 'https://www.purissima.com/assets/images/unboxing-premium.png';
const assessmentScreens = 'https://www.purissima.com/assets/images/trio-anamnese.png';
const qualityPhoto = 'https://www.purissima.com/assets/images/excelencia.jpg';
const journeyMosaic = 'https://www.purissima.com/assets/images/how-custom-first-mosaico.png';

const Public = ({ children }: { children: React.ReactNode }) => <><PublicHeader />{children}<Footer /></>;

export function PremiumHome() {
  return <Public><main className="premium-home">
    <section className="premium-hero">
      <img className="premium-hero__image" src={heroPremium} alt="Linha Puríssima Premium com embalagem, frasco e ingredientes botânicos" />
      <div className="premium-hero__content">
        <p className="premium-kicker">Saúde personalizada</p>
        <h1>Cuidado que começa <em>com você.</em></h1>
        <p>Uma experiência clara e próxima para acompanhar o que faz sentido para a sua rotina.</p>
        <div className="premium-hero__actions"><Button to="/onboarding">Começar minha jornada <ArrowRight size={16} /></Button><Link to="/como-funciona">Como funciona <ArrowRight size={15} /></Link></div>
        <small>Ambiente demonstrativo. Informações e acompanhamento digital não substituem avaliação, diagnóstico ou prescrição por profissionais habilitados.</small>
      </div>
    </section>

    <section className="premium-manifesto">
      <div><p className="premium-kicker">Feita para o seu ritmo</p><h2>Clareza, presença e uma experiência que respeita a vida real.</h2></div>
      <p className="premium-manifesto__lead">Menos ruído para organizar cada etapa da jornada com leveza e contexto.</p>
      <div className="premium-principles">
        <article><span>01</span><h3>Seu perfil, primeiro</h3><p>Comece por quem vai viver a jornada e pelas preferências que importam.</p></article>
        <article><span>02</span><h3>Ciclos, não carrinhos</h3><p>Entenda o que acontece agora e o que vem depois, sem excesso de informação.</p></article>
        <article><span>03</span><h3>Clareza para decidir</h3><p>Orientação objetiva e espaço para falar com alguém quando necessário.</p></article>
      </div>
    </section>

    <section className="premium-product-story">
      <div className="premium-product-story__copy"><p className="premium-kicker">Uma experiência completa</p><h2>Produtos que chegam com contexto.</h2><p>As apresentações fazem parte de uma jornada acompanhada — não de uma vitrine. Você visualiza cada etapa com clareza, no momento certo.</p><Link to="/como-funciona" className="premium-text-link">Conhecer o processo <ArrowRight size={16} /></Link></div>
      <div className="premium-product-story__visual"><img src={kitPremium} alt="Kit Premium da Puríssima com apresentações Dia e Noite" /><span>My Formula<br /><i>Premium</i></span></div>
    </section>

    <section className="premium-method">
      <div className="premium-method__screens"><img src={assessmentScreens} alt="Telas da experiência digital Puríssima com mapa de saúde" /></div>
      <div className="premium-method__copy"><p className="premium-kicker">Uma jornada organizada</p><h2>Você entende o caminho antes de dar o próximo passo.</h2><ol><li><b>01</b><div><strong>Começamos ouvindo</strong><p>Perfil, preferências e contexto, sem transformar o início em avaliação clínica.</p></div></li><li><b>02</b><div><strong>Organizamos o que importa</strong><p>Informações, ciclos e próximos passos em uma experiência contínua.</p></div></li><li><b>03</b><div><strong>Acompanhamos com clareza</strong><p>Suporte digital e participação profissional quando aplicável.</p></div></li></ol><Button to="/como-funciona" variant="secondary">Ver como funciona <ArrowRight size={16} /></Button></div>
    </section>

    <section className="premium-quality">
      <img className="premium-quality__lab" src={qualityPhoto} alt="Profissional em laboratório, em imagem oficial da Puríssima" />
      <div className="premium-quality__copy"><p className="premium-kicker">Cuidado em cada detalhe</p><h2>Uma relação entre ciência, rotina e bem-estar.</h2><p>Uma experiência digital feita para simplificar a jornada e apresentar seus limites com transparência.</p><div className="premium-quality__notes"><span><ShieldCheck size={18} /> Informação clara sobre o processo</span><span><Sparkles size={18} /> Tecnologia para simplificar, não substituir o cuidado humano</span></div></div>
      <img className="premium-quality__mosaic" src={journeyMosaic} alt="Mosaico oficial da Puríssima com produto, família e rotina" />
    </section>

    <section className="premium-ritual">
      <div><p className="premium-kicker">A experiência Puríssima</p><h2>Pequenos rituais. Mais presença no seu dia.</h2><p>Uma jornada pensada para ser mais clara, mais próxima e mais sua.</p><Button to="/onboarding" variant="dark">Começar minha jornada <ArrowRight size={16} /></Button></div>
      <figure><img src={unboxingPremium} alt="Kit Puríssima em embalagem de apresentação" /><figcaption>Uma experiência pensada nos detalhes.</figcaption></figure>
    </section>
  </main></Public>;
}
