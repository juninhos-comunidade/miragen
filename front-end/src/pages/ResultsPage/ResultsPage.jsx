import { useLocation } from "react-router";
import {
    Download,
    Plus,
    Info,
    CheckCircle2,
    AlertCircle,
    Sparkles,
    TrendingUp,
    ChevronRight,
    FileText
} from 'lucide-react';
import './ResultsPage.css';

function ResultsPage() {
    const vaga = "Product Manager Sênior";
    const strongSkills = ['Gestão de Produtos', 'UX/UI', 'SQL', 'Análise de Dados', 'Roadmap', 'Scrum', 'Stakeholder Management'];
    const warningSkills = ['Métricas de Produto', 'Experimentação', 'Growth Hacking'];
    const aiSuggestions = ["Destaque métricas de impacto", "Inclua resultados quantitativos dos projetos que você liderou para evidenciar ainda mais seu impacto."]

    const { state } = useLocation();
    const { score } = state;

    const competencies = [
        { label: 'Gestão de Produtos', val: 90 },
        { label: 'Análise de Dados', val: 85 },
        { label: 'Comunicação', val: 80 },
        { label: 'Liderança', val: 75 },
        { label: 'Estratégia de Produto', val: 70 },
    ];

    const compatibilityPercent = score * 100;
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius;
    const offset =
        circumference - (compatibilityPercent / 100) * circumference;

    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">

                {/* Header */}
                <header className="dashboard-header">
                    <div>
                        <h1 className="header-title">Resultado da análise</h1>
                        <p className="header-subtitle">
                            Confira o resultado da análise do seu currículo para a vaga de{' '}
                            <span className="highlight-text">{vaga}</span>
                        </p>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn-secondary">
                            <Download size={16} />
                            Baixar Relatório
                        </button>
                        <button className="btn btn-primary">
                            <Plus size={16} />
                            Nova Análise
                        </button>
                    </div>
                </header>

                <div className="grid-2-col">

                    <div className="card card-compatibility">
                        <div className="chart-container">
                            <div className="card-title-with-icon">
                                <span>Compatibilidade Geral</span>
                                <Info className="icon-info" />
                            </div>
                            <div className="donut-wrapper">
                                <svg className="donut-svg" viewBox="0 0 36 36">
                                    <path
                                        className="donut-bg"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="donut-progress"
                                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"

                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                    />
                                </svg>
                                <div className="donut-text-container">
                                    <span className="donut-percentage">{compatibilityPercent}%</span>
                                    <span className="donut-label">Compatível</span>
                                </div>
                            </div>
                        </div>

                        <div className="summary-content">
                            <h2 className="summary-headline">
                                Muito bom! <span role="img" aria-label="festa">🎉</span>
                            </h2>
                            <p className="summary-description">
                                Seu perfil está bem alinhado com os requisitos da vaga.
                            </p>

                            <div className="metrics-list">
                                <div className="metric-item">
                                    <div className="metric-label">
                                        <CheckCircle2 className="icon-success" size={16} />
                                        Pontos fortes
                                    </div>
                                    <span className="metric-value">12</span>
                                </div>

                                <div className="metric-item">
                                    <div className="metric-label">
                                        <AlertCircle className="icon-warning" size={16} />
                                        Pontos de atenção
                                    </div>
                                    <span className="metric-value">3</span>
                                </div>

                                <div className="metric-item">
                                    <div className="metric-label">
                                        <Sparkles className="icon-ai" size={16} />
                                        Recomendações da IA
                                    </div>
                                    <span className="metric-value">7</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-space-between">
                        <div>
                            <div className="card-title-with-icon">
                                <span style={{ fontSize: '1.125rem', color: '#1e293b' }}>Skills em Destaque</span>
                                <Info className="icon-info" />
                            </div>
                            <p className="skills-subtitle">
                                Principais habilidades encontradas no seu currículo.
                            </p>

                            <div className="skills-section">
                                <span className="skills-group-title">Fortes</span>
                                <div className="skills-badges">
                                    {strongSkills.map((skill) => (
                                        <span key={skill} className="badge badge-strong">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="skills-section">
                                <span className="skills-group-title">Atenção</span>
                                <div className="skills-badges">
                                    {warningSkills.map((skill) => (
                                        <span key={skill} className="badge badge-warning">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-2-col">

                    <div className="card">
                        <div className="card-header-flex">
                            <div className="card-title-with-icon" style={{ margin: 0 }}>
                                <span>Comparativo de Competências</span>
                                <Info className="icon-info" />
                            </div>
                            <div className="chart-legend">
                                <span className="legend-item">
                                    <span className="dot dot-purple"></span>
                                    Seu currículo
                                </span>
                                <span className="legend-item">
                                    <span className="dot dot-gray"></span>
                                    Vaga
                                </span>
                            </div>
                        </div>

                        <div className="bars-list">
                            {competencies.map((item) => (
                                <div key={item.label} className="bar-item">
                                    <span className="bar-label">{item.label}</span>
                                    <div className="bar-track">
                                        <div
                                            className="bar-fill"
                                            style={{ width: `${item.val}%` }}
                                        />
                                    </div>
                                    <span className="bar-value">{item.val}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card card-space-between">
                        <div>
                            <div className="card-title-with-icon" style={{ gap: '0.5rem', margin: '0 0 0.5rem 0' }}>
                                <Sparkles size={20} className="icon-ai" />
                                <span style={{ color: '#1e293b' }}>Sugestão da IA</span>
                            </div>
                            <p className="skills-subtitle" style={{ marginBottom: '1rem' }}>
                                Com base na análise do seu perfil, nossa IA sugere os seguintes aprimoramentos para aumentar suas chances.
                            </p>

                            <div className="suggestion-box">
                                <div className="suggestion-icon-wrapper">
                                    <TrendingUp size={16} />
                                </div>
                                <div>
                                    <h4 className="suggestion-title">{aiSuggestions[0]}</h4>
                                    <p className="suggestion-text">
                                        {aiSuggestions[1]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-full-outline">
                            Ver todas as sugestões
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Banner Inferior: Relatório Completo */}
                <div className="banner-report">
                    <div className="banner-content">
                        <div className="banner-icon">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="banner-title">Relatório Completo</h3>
                            <p className="banner-text">
                                Veja a análise detalhada do seu currículo, com todos os pontos fortes, de atenção e recomendações personalizadas.
                            </p>
                        </div>
                    </div>
                    <button className="btn-banner">
                        Acessar Relatório Completo
                        <ChevronRight size={16} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ResultsPage