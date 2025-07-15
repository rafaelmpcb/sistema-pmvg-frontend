import React, { useState, useEffect } from 'react';
import {
  Shield, FileText, AlertTriangle, Clock, Upload, Download,
  Settings, User, LogOut, RefreshCw, CheckCircle, XCircle,
  Calendar, DollarSign, Building, Users, Target, Bell,
  Activity, TrendingUp, BarChart3, FileSpreadsheet, Plus,
  Search, Filter, Edit, Trash2, Eye, Save, X, Mail,
  Calculator, DocumentText, Printer, Package, TrendingDown,
  TrendingUp as TrendingUpIcon, AlertCircle, Award, FileDown,
  PieChart, BarChart, LineChart, ShoppingCart, Pill, Database
} from 'lucide-react';

// URL do backend no Render
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://sistema-pmvg-backend.onrender.com/api';

//  ✅  Debug para verificar URL da API
console.log(' 🌐  API Base URL configurada:', API_BASE_URL);
console.log(' 🔧  Variável de ambiente REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderBottom: '2px solid #2563eb',
        padding: '1rem 0'
    },
    headerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
    },
    logoIcon: {
        color: '#2563eb',
        width: '32px',
        height: '32px'
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: 0
    },
    subtitle: {
        fontSize: '0.875rem',
        color: '#6b7280',
        margin: 0
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    main: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem 1rem',
        display: 'flex',
        gap: '2rem'
    },
    sidebar: {
        width: '256px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    content: {
        flex: 1
    },
    navButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'transparent',
        color: '#374151',
        cursor: 'pointer',
        fontSize: '0.875rem',
        transition: 'all 0.2s',
        textAlign: 'left',
        width: '100%'
    },
    navButtonActive: {
        backgroundColor: '#dbeafe',
        color: '#1d4ed8',
        fontWeight: '500'
    },
    badge: {
        backgroundColor: '#2563eb',
        color: 'white',
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '9999px',
        marginLeft: 'auto'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '1.5rem'
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1rem'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
    },
    statCard: {
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    statIcon: {
        padding: '0.5rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    statIconBlue: { backgroundColor: '#dbeafe', color: '#2563eb' },
    statIconGreen: { backgroundColor: '#dcfce7', color: '#16a34a' },
    statIconRed: { backgroundColor: '#fee2e2', color: '#dc2626' },
    statIconYellow: { backgroundColor: '#fef3c7', color: '#d97706' },
    statText: { flex: 1 },
    statTitle: { fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 },
    statValue: { fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 },
    statSubtitle: { fontSize: '0.75rem', color: '#9ca3af', margin: 0 },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '6px',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s'
    },
    buttonPrimary: { backgroundColor: '#2563eb', color: 'white' },
    buttonSecondary: { backgroundColor: '#f3f4f6', color: '#374151' },
    buttonSuccess: { backgroundColor: '#16a34a', color: 'white' },
    buttonDanger: { backgroundColor: '#dc2626', color: 'white' },
    buttonWarning: { backgroundColor: '#d97706', color: 'white' },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    formGroupRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
    formGroupRow3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' },
    label: { fontSize: '0.875rem', fontWeight: '500', color: '#374151' },
    input: {
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s'
    },
    textarea: {
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        minHeight: '100px',
        resize: 'vertical'
    },
    select: {
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: 'none',
        backgroundColor: 'white'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    th: {
        backgroundColor: '#f9fafb',
        padding: '0.75rem',
        textAlign: 'left',
        fontWeight: '600',
        color: '#374151',
        borderBottom: '1px solid #e5e7eb'
    },
    td: {
        padding: '0.75rem',
        borderBottom: '1px solid #e5e7eb',
        color: '#6b7280'
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '900px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto'
    },
    tabs: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #e5e7eb'
    },
    tab: {
        padding: '0.75rem 1rem',
        border: 'none',
        borderBottom: '2px solid transparent',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#6b7280'
    },
    tabActive: {
        color: '#2563eb',
        borderBottomColor: '#2563eb'
    },
    priceComparison: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: '#f9fafb',
        borderRadius: '6px',
        border: '1px solid #e5e7eb'
    },
    priceBox: {
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '6px',
        border: '1px solid #e5e7eb'
    },
    priceLabel: { fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.5rem' },
    priceValue: { fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' },
    priceChange: {
        fontSize: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem'
    },
    alert: {
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '1rem',
        border: '1px solid'
    },
    alertSuccess: { backgroundColor: '#dcfce7', borderColor: '#86efac', color: '#15803d' },
    alertError: { backgroundColor: '#fee2e2', borderColor: '#fca5a5', color: '#b91c1c' },
    alertWarning: { backgroundColor: '#fef3c7', borderColor: '#fcd34d', color: '#92400e' },
    alertInfo: { backgroundColor: '#dbeafe', borderColor: '#93c5fd', color: '#1e40af' },
    loginContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
    },
    loginCard: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
    },
    loginHeader: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    searchResult: {
        padding: '0.75rem',
        borderBottom: '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: 'all 0.2s',
        backgroundColor: 'white'
    },
};

function App() {
    const [user, setUser] = useState(null);
    const [currentView, setCurrentView] = useState('dashboard');
    const [loading, setLoading] = useState(false);
    const [systemStatus, setSystemStatus] = useState(null);
    const [pmvgStatus, setPmvgStatus] = useState(null);
    const [licitacoes, setLicitacoes] = useState([]);
    const [alertas, setAlertas] = useState([]);
    const [message, setMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedLicitacao, setSelectedLicitacao] = useState(null);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailConfig, setEmailConfig] = useState({
        email: '',
        notificacoesMensais: true,
        alertasCriticos: true,
        relatoriosSemanais: false
    });

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (token && userData) {
            setUser(JSON.parse(userData));
            setEmailConfig(prev => ({ ...prev, email: JSON.parse(userData).email }));
            loadSystemStatus();
            loadData();
            setTimeout(() => checkMonthlyNotifications(), 2000);
        }
    }, []);

    const api = async (endpoint, options = {}) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    ...options.headers
                },
                ...options
            });
            if (response.status === 401) {
                logout();
                return null;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API Error:', error);
            setMessage({ type: 'error', text: 'Erro de conexão com o servidor' });
            return null;
        }
    };

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage(null), 5000);
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                setEmailConfig(prev => ({ ...prev, email: data.user.email }));
                await loadSystemStatus();
                await loadData();
                showMessage('success', 'Login realizado com sucesso!');
            } else {
                showMessage('error', data.error || 'Erro no login');
            }
        } catch (error) {
            showMessage('error', 'Erro de conexão com o servidor');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setCurrentView('dashboard');
        showMessage('info', 'Logout realizado com sucesso');
    };

    const loadSystemStatus = async () => {
        try {
            const data = await api('/system/status');
            if (data) setSystemStatus(data);
        } catch (error) {
            console.error('Erro ao carregar status do sistema:', error);
        }
    };

    const loadData = async () => {
        try {
            const [licitacoesData, alertasData, pmvgData] = await Promise.all([
                api('/licitacoes'),
                api('/alertas'),
                api('/pmvg/status')
            ]);
            if (licitacoesData) setLicitacoes(licitacoesData);
            if (alertasData) setAlertas(alertasData);
            if (pmvgData) setPmvgStatus(pmvgData);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };

    const testConnectivity = async () => {
        setLoading(true);
        showMessage('info', ' 🔄  Testando conectividade com backend...');
        try {
            const healthResponse = await fetch(`${API_BASE_URL}/health`, { method: 'GET', timeout: 10000 });
            if (!healthResponse.ok) {
                throw new Error(`Backend retornou status ${healthResponse.status}`);
            }
            showMessage('success', ' ✅  Backend conectado! Atualizando dados...');
            await loadSystemStatus();
            await loadData();
            showMessage('success', ' ✅  Dados atualizados com sucesso!');
        } catch (error) {
            console.error(' ❌  Erro na conectividade:', error);
            showMessage('error', ` ❌  Erro: ${error.message}. Verifique se o backend está rodando no Render.`);
        } finally {
            setLoading(false);
        }
    };

    const deleteLicitacao = async (licitacaoId) => {
        const licitacao = licitacoes.find(l => l.id === licitacaoId);
        if (user.role !== 'admin') {
            showMessage('error', 'Apenas administradores podem excluir licitações');
            return;
        }
        if (licitacao?.status === 'executando') {
            showMessage('error', 'Não é possível excluir licitação em execução');
            return;
        }
        const confirmacao = window.confirm(` ⚠️  EXCLUSÃO PERMANENTE\n\nLicitação: ${licitacao?.numero || licitacaoId}\nMedicamentos: ${licitacao?.medicamentos?.length || 0}\nAlertas: ${alertas.filter(a => a.licitacao === licitacao?.numero).length}\n\nEsta ação irá excluir TUDO em cascata e não pode ser desfeita.\n\nTem certeza absoluta?`);
        if (confirmacao) {
            try {
                setAlertas(prev => prev.filter(a => a.licitacao !== licitacao?.numero));
                setLicitacoes(prev => prev.filter(l => l.id !== licitacaoId));
                await api(`/licitacoes/${licitacaoId}`, { method: 'DELETE' });
                showMessage('success', 'Licitação e dados relacionados excluídos com sucesso!');
                await loadData();
            } catch (error) {
                showMessage('error', 'Erro ao excluir licitação: ' + error.message);
            }
        }
    };

    const openModal = (type, data = null) => {
        setModalType(type);
        setSelectedLicitacao(data);
        setShowModal(true);
    };

    const openVisualizarModal = (licitacao) => {
        setSelectedLicitacao(licitacao);
        setModalType('visualizar');
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
        setSelectedLicitacao(null);
    };

    const saveLicitacao = async (licitacaoData) => {
        const isEditing = !!selectedLicitacao;
        const endpoint = isEditing ? `/licitacoes/${selectedLicitacao.id}` : '/licitacoes';
        const method = isEditing ? 'PUT' : 'POST';

        try {
            const response = await api(endpoint, {
                method,
                body: JSON.stringify(licitacaoData)
            });
            if (response) {
                showMessage('success', `Licitação ${isEditing ? 'atualizada' : 'criada'} com sucesso!`);
                await loadData();
                closeModal();
            }
        } catch (error) {
            console.error('Erro ao salvar licitação:', error);
            showMessage('error', 'Erro ao salvar licitação');
        }
    };
    
    const openEmailConfig = () => {
        setEmailConfig(prev => ({ ...prev, email: user?.email || '' }));
        setShowEmailModal(true);
    };

    const saveEmailConfig = () => {
        localStorage.setItem('emailConfig', JSON.stringify(emailConfig));
        showMessage('success', 'Configurações de email salvas com sucesso!');
        setShowEmailModal(false);
    };
    
    const exportData = async (type, format) => {
        try {
            const response = await fetch(`${API_BASE_URL}/relatorios/${type}?format=${format}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `relatorio-${type}.${format}`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                showMessage('success', `Relatório ${type} exportado em ${format.toUpperCase()}!`);
            } else {
                throw new Error('Erro ao exportar relatório');
            }
        } catch (error) {
            showMessage('error', 'Erro ao exportar relatório');
        }
    };
    
    const searchMedicamentos = async (searchTerm) => {
        if (!searchTerm || searchTerm.length < 2) return [];
        try {
            const response = await api(`/medicamentos/search?q=${encodeURIComponent(searchTerm)}`);
            if (!response) {
                showMessage('error', 'Backend não respondeu. Verifique se está rodando no Render.');
                return [];
            }
            return response;
        } catch (error) {
            console.error(' ❌  Erro ao buscar medicamentos:', error);
            showMessage('error', `Erro na busca: ${error.message || 'Servidor não conectado'}`);
            return [];
        }
    };
    
    const checkMonthlyNotifications = () => { /* ... (código existente mantido) ... */ };
    
    if (!user) {
        return <LoginScreen onLogin={login} loading={loading} />;
    }

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
              <div style={styles.headerContent}>
                <div style={styles.logo}>
                  <Shield style={styles.logoIcon} />
                  <div>
                    <h1 style={styles.title}>Sistema PMVG</h1>
                    <p style={styles.subtitle}>Preço Máximo de Venda ao Governo</p>
                  </div>
                </div>
                <div style={styles.userInfo}>
                    <div style={{ fontSize: '0.875rem', color: '#374151' }}>
                        <span style={{ fontWeight: '500' }}>{user.name}</span>
                        <span style={{ color: '#9ca3af', marginLeft: '0.5rem' }}>({user.role})</span>
                    </div>
                    <button onClick={logout} style={{ ...styles.button, ...styles.buttonSecondary }}>
                        <LogOut size={16} />Sair
                    </button>
                </div>
              </div>
            </header>

            {/* Message */}
            {message && (
                <div style={{
                    position: 'fixed', top: '20px', right: '20px', zIndex: 1001,
                    ...styles.alert, ...styles[`alert${message.type.charAt(0).toUpperCase() + message.type.slice(1)}`]
                }}>
                    {message.text}
                </div>
            )}

            <div style={styles.main}>
                {/* Sidebar */}
                <div style={styles.sidebar}>
                    <NavButton icon={BarChart3} label="Dashboard" active={currentView === 'dashboard'} onClick={() => setCurrentView('dashboard')} />
                    <NavButton icon={Database} label="Base PMVG" active={currentView === 'pmvg'} onClick={() => setCurrentView('pmvg')} badge={pmvgStatus?.totalMedicamentos || ''} />
                    <NavButton icon={FileText} label="Licitações" active={currentView === 'licitacoes'} onClick={() => setCurrentView('licitacoes')} badge={licitacoes.length} />
                    <NavButton icon={AlertTriangle} label="Alertas" active={currentView === 'alertas'} onClick={() => setCurrentView('alertas')} badge={alertas.filter(a => a.status === 'ativo').length} />
                    <NavButton icon={Calculator} label="Comparação Preços" active={currentView === 'comparacao'} onClick={() => setCurrentView('comparacao')} />
                    <NavButton icon={FileDown} label="Relatórios" active={currentView === 'relatorios'} onClick={() => setCurrentView('relatorios')} />
                </div>

                {/* Main Content */}
                <div style={styles.content}>
                    {currentView === 'dashboard' && <DashboardView licitacoes={licitacoes} alertas={alertas} pmvgStatus={pmvgStatus} user={user} />}
                    {currentView === 'pmvg' && <PMVGView pmvgStatus={pmvgStatus} loading={loading} searchMedicamentos={searchMedicamentos} testConnectivity={testConnectivity} />}
                    {currentView === 'licitacoes' && <LicitacoesView licitacoes={licitacoes} onOpenModal={openModal} onDelete={deleteLicitacao} onVisualizar={openVisualizarModal} user={user} />}
                    {currentView === 'alertas' && <AlertasView alertas={alertas} />}
                    {currentView === 'comparacao' && <ComparacaoView searchMedicamentos={searchMedicamentos} styles={styles} />}
                    {currentView === 'relatorios' && <RelatoriosView onExport={exportData} styles={styles} />}
                </div>
            </div>
            
            {/* Modals */}
            {showModal && <Modal type={modalType} data={selectedLicitacao} searchMedicamentos={searchMedicamentos} onClose={closeModal} onSave={saveLicitacao} />}
            {showEmailModal && <EmailConfigModal emailConfig={emailConfig} setEmailConfig={setEmailConfig} onSave={saveEmailConfig} onClose={() => setShowEmailModal(false)} />}
        </div>
    );
}

// ==========================================================================================
// == INÍCIO DOS COMPONENTES ADICIONADOS / COMPLETADOS ======================================
// ==========================================================================================

const LoginScreen = ({ onLogin, loading }) => { /* ... (código existente mantido) ... */ };
const NavButton = ({ icon: Icon, label, active, onClick, badge }) => { /* ... (código existente mantido) ... */ };
const DashboardView = ({ licitacoes, alertas, pmvgStatus, user }) => { /* ... (código existente mantido) ... */ };
const PMVGView = ({ pmvgStatus, loading, searchMedicamentos, testConnectivity }) => { /* ... (código existente mantido) ... */ };
const LicitacoesView = ({ licitacoes, onOpenModal, onDelete, onVisualizar, user }) => { /* ... (código existente mantido) ... */ };
const AlertasView = ({ alertas }) => { /* ... (código existente mantido) ... */ };
const EmailConfigModal = ({ emailConfig, setEmailConfig, onSave, onClose }) => { /* ... (código existente mantido) ... */ };

// ==========================================================================================
// == COMPONENTE MODAL (NOVO) ===============================================================
// ==========================================================================================
const Modal = ({ type, data, searchMedicamentos, onClose, onSave }) => {
  // Se for o modo de visualização, renderiza um modal somente leitura.
  if (type === 'visualizar') {
    return <VisualizarLicitacaoModal licitacao={data} onClose={onClose} styles={styles} />;
  }

  // Lógica para o modal de criação/edição de licitação
  const [licitacaoData, setLicitacaoData] = useState({
    numero: '',
    orgao: '',
    dataVencimento: '',
    medicamentos: [],
    ...data // Se 'data' for fornecido (edição), ele sobrescreve os valores iniciais
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Efeito para buscar medicamentos quando o termo de busca muda
  useEffect(() => {
    const performSearch = async () => {
      if (searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      const results = await searchMedicamentos(searchTerm);
      setSearchResults(results || []);
      setIsSearching(false);
    };
    const debounceTimeout = setTimeout(() => {
      performSearch();
    }, 300); // Debounce para evitar buscas a cada tecla pressionada

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, searchMedicamentos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLicitacaoData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddMedicamento = (medicamento) => {
    setLicitacaoData(prev => ({
      ...prev,
      medicamentos: [
        ...prev.medicamentos,
        { ...medicamento, quantidade: 1, precoOfertado: 0, precoFabricaEditavel: medicamento.precoFabrica || 0 }
      ]
    }));
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleRemoveMedicamento = (medicamentoId) => {
    setLicitacaoData(prev => ({
      ...prev,
      medicamentos: prev.medicamentos.filter(med => med.id !== medicamentoId)
    }));
  };

  const handleUpdateMedicamento = (medicamentoId, field, value) => {
    setLicitacaoData(prev => ({
      ...prev,
      medicamentos: prev.medicamentos.map(med =>
        med.id === medicamentoId ? { ...med, [field]: value } : med
      )
    }));
  };
  
  const handleSave = () => {
    if (!licitacaoData.numero || !licitacaoData.orgao || !licitacaoData.dataVencimento) {
      alert('Por favor, preencha os dados principais da licitação.');
      return;
    }
    if (licitacaoData.medicamentos.length === 0) {
      alert('Adicione pelo menos um medicamento à licitação.');
      return;
    }
    onSave(licitacaoData);
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>
            {data ? 'Editar Licitação' : 'Nova Licitação'}
          </h3>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        
        <div style={styles.form}>
          <div style={styles.formGroupRow3}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Número/Processo</label>
              <input name="numero" value={licitacaoData.numero} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Órgão Licitante</label>
              <input name="orgao" value={licitacaoData.orgao} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Data de Vencimento</label>
              <input name="dataVencimento" type="date" value={licitacaoData.dataVencimento.split('T')[0]} onChange={handleChange} style={styles.input} />
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginTop: '1rem' }}>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Medicamentos da Licitação</h4>
            
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <label style={styles.label}>Adicionar Medicamento</label>
              <input
                type="text"
                placeholder="Digite o nome do medicamento para buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ ...styles.input, marginTop: '0.5rem' }}
              />
              {isSearching && <RefreshCw size={16} style={{ position: 'absolute', right: '10px', top: '40px', animation: 'spin 1s linear infinite' }} />}
              {searchResults.length > 0 && (
                <div style={{ position: 'absolute', width: '100%', maxHeight: '200px', overflowY: 'auto', backgroundColor: 'white', border: '1px solid #d1d5db', borderRadius: '6px', zIndex: 1001, marginTop: '4px' }}>
                  {searchResults.map(med => (
                    <div key={med.id} onClick={() => handleAddMedicamento(med)} style={styles.searchResult}>
                      <strong>{med.nome}</strong> - {med.laboratorio} (PMVG: R$ {med.pmvg.toFixed(2)})
                    </div>
                  ))}
                </div>
              )}
            </div>

            <table style={{...styles.table, fontSize: '0.875rem'}}>
              <thead>
                <tr>
                  <th style={styles.th}>Medicamento</th>
                  <th style={styles.th}>PMVG</th>
                  <th style={styles.th}>Preço Fábrica</th>
                  <th style={styles.th}>Preço Ofertado</th>
                  <th style={styles.th}>Quantidade</th>
                  <th style={styles.th}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {licitacaoData.medicamentos.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{...styles.td, textAlign: 'center', padding: '1rem'}}>Nenhum medicamento adicionado.</td>
                  </tr>
                ) : (
                  licitacaoData.medicamentos.map(med => (
                    <tr key={med.id}>
                      <td style={styles.td}>{med.nome}</td>
                      <td style={styles.td}>R$ {med.pmvg.toFixed(2)}</td>
                      <td style={styles.td}>
                        <input type="number" value={med.precoFabricaEditavel} onChange={(e) => handleUpdateMedicamento(med.id, 'precoFabricaEditavel', parseFloat(e.target.value))} style={{...styles.input, padding: '0.25rem', width: '80px'}}/>
                      </td>
                      <td style={styles.td}>
                        <input type="number" value={med.precoOfertado} onChange={(e) => handleUpdateMedicamento(med.id, 'precoOfertado', parseFloat(e.target.value))} style={{...styles.input, padding: '0.25rem', width: '80px', borderColor: med.precoOfertado > med.pmvg ? 'red' : '#d1d5db'}}/>
                      </td>
                      <td style={styles.td}>
                        <input type="number" value={med.quantidade} onChange={(e) => handleUpdateMedicamento(med.id, 'quantidade', parseInt(e.target.value, 10))} style={{...styles.input, padding: '0.25rem', width: '70px'}}/>
                      </td>
                      <td style={styles.td}>
                        <button onClick={() => handleRemoveMedicamento(med.id)} style={{...styles.button, ...styles.buttonDanger, padding: '0.25rem 0.5rem'}}><Trash2 size={14} /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <button onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>Cancelar</button>
          <button onClick={handleSave} style={{ ...styles.button, ...styles.buttonPrimary }}><Save size={16} /> Salvar</button>
        </div>
      </div>
    </div>
  );
};

const VisualizarLicitacaoModal = ({ licitacao, onClose, styles }) => {
    const totalValorOfertado = licitacao.medicamentos?.reduce((acc, med) => acc + ((med.precoOfertado || 0) * (med.quantidade || 1)), 0) || 0;
    const totalValorPMVG = licitacao.medicamentos?.reduce((acc, med) => acc + ((med.pmvg || 0) * (med.quantidade || 1)), 0) || 0;
    const economia = totalValorPMVG - totalValorOfertado;

    return (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>Detalhes da Licitação: {licitacao.numero}</h3>
                    <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><X size={24} /></button>
                </div>

                <div style={styles.statsGrid}>
                    <StatCard title="Órgão" value={licitacao.orgao} icon={Building} color="blue" subtitle="Órgão Licitante" />
                    <StatCard title="Vencimento" value={new Date(licitacao.dataVencimento).toLocaleDateString('pt-BR')} icon={Calendar} color="yellow" subtitle="Prazo final" />
                    <StatCard title="Economia Total" value={`R$ ${economia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} icon={TrendingDown} color="green" subtitle="Em relação ao PMVG" />
                    <StatCard title="Itens com Risco" value={licitacao.medicamentos?.filter(m => m.precoOfertado > m.pmvg).length} icon={AlertTriangle} color="red" subtitle="Preço ofertado > PMVG" />
                </div>
                
                <h4 style={{ margin: '1.5rem 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Itens da Licitação</h4>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <table style={{...styles.table, fontSize: '0.875rem'}}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Medicamento</th>
                                <th style={styles.th}>PMVG</th>
                                <th style={styles.th}>Preço Ofertado</th>
                                <th style={styles.th}>Qtd.</th>
                                <th style={styles.th}>Subtotal</th>
                                <th style={styles.th}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {licitacao.medicamentos?.map(med => {
                                const isAcimaPMVG = med.precoOfertado > med.pmvg;
                                return (
                                <tr key={med.id}>
                                    <td style={styles.td}><strong>{med.nome}</strong><br/><span style={{fontSize: '0.75rem', color: '#6b7280'}}>{med.laboratorio}</span></td>
                                    <td style={styles.td}>R$ {med.pmvg.toFixed(2)}</td>
                                    <td style={{...styles.td, fontWeight: 'bold', color: isAcimaPMVG ? '#dc2626' : '#1f2937' }}>R$ {(med.precoOfertado || 0).toFixed(2)}</td>
                                    <td style={styles.td}>{med.quantidade}</td>
                                    <td style={styles.td}>R$ {((med.precoOfertado || 0) * med.quantidade).toFixed(2)}</td>
                                    <td style={styles.td}>
                                        <span style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', backgroundColor: isAcimaPMVG ? '#fee2e2' : '#dcfce7', color: isAcimaPMVG ? '#dc2626' : '#16a34a' }}>
                                            {isAcimaPMVG ? 'ACIMA PMVG' : 'OK'}
                                        </span>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                    <button onClick={onClose} style={{ ...styles.button, ...styles.buttonPrimary }}>Fechar</button>
                </div>
            </div>
        </div>
    );
};

// ==========================================================================================
// == COMPONENTE COMPARACAO VIEW (NOVO) =====================================================
// ==========================================================================================
const ComparacaoView = ({ searchMedicamentos, styles }) => {
    const [medicamentos, setMedicamentos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const performSearch = async () => {
            if (searchTerm.length < 2) {
                setSearchResults([]);
                return;
            }
            setIsSearching(true);
            const results = await searchMedicamentos(searchTerm);
            setSearchResults(results || []);
            setIsSearching(false);
        };
        const debounceTimeout = setTimeout(() => { performSearch(); }, 300);
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, searchMedicamentos]);
    
    const handleAddMedicamento = (medicamento) => {
        if (!medicamentos.find(m => m.id === medicamento.id)) {
            setMedicamentos(prev => [...prev, medicamento]);
        }
        setSearchTerm('');
        setSearchResults([]);
    };

    const handleRemoveMedicamento = (medicamentoId) => {
        setMedicamentos(prev => prev.filter(m => m.id !== medicamentoId));
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.cardTitle}>Comparador de Preços de Medicamentos</h2>
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <label style={styles.label}>Adicionar Medicamento à Comparação</label>
                <input
                    type="text"
                    placeholder="Digite para buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ ...styles.input, marginTop: '0.5rem' }}
                />
                {isSearching && <RefreshCw size={16} style={{ position: 'absolute', right: '10px', top: '40px', animation: 'spin 1s linear infinite' }} />}
                {searchResults.length > 0 && (
                    <div style={{ position: 'absolute', width: '100%', maxHeight: '200px', overflowY: 'auto', backgroundColor: 'white', border: '1px solid #d1d5db', borderRadius: '6px', zIndex: 100, marginTop: '4px' }}>
                        {searchResults.map(med => (
                            <div key={med.id} onClick={() => handleAddMedicamento(med)} style={styles.searchResult}>
                                <strong>{med.nome}</strong> - {med.laboratorio}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {medicamentos.length > 0 ? (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Medicamento</th>
                            <th style={styles.th}>Laboratório</th>
                            <th style={styles.th}>Apresentação</th>
                            <th style={styles.th}>PMVG</th>
                            <th style={styles.th}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicamentos.map(med => (
                            <tr key={med.id}>
                                <td style={styles.td}><strong>{med.nome}</strong></td>
                                <td style={styles.td}>{med.laboratorio}</td>
                                <td style={styles.td}>{med.apresentacao}</td>
                                <td style={{...styles.td, fontWeight: 'bold', color: '#16a34a'}}>R$ {med.pmvg.toFixed(2)}</td>
                                <td style={styles.td}>
                                    <button onClick={() => handleRemoveMedicamento(med.id)} style={{...styles.button, ...styles.buttonDanger, padding: '0.25rem 0.5rem'}}>
                                        <Trash2 size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                    <p>Busque e adicione medicamentos para compará-los lado a lado.</p>
                </div>
            )}
        </div>
    );
};

// ==========================================================================================
// == COMPONENTE RELATORIOS VIEW (NOVO) =====================================================
// ==========================================================================================
const RelatoriosView = ({ onExport, styles }) => {
    return (
        <div>
            <div style={styles.card}>
                <h2 style={styles.cardTitle}>Exportação de Relatórios</h2>
                <p style={{color: '#6b7280', marginTop: '-1rem', marginBottom: '1.5rem'}}>
                    Exporte os dados do sistema em formatos de planilha para análise externa.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                    {/* Card de Relatório de Licitações */}
                    <div style={{...styles.card, margin: 0, border: '1px solid #dbeafe'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                            <div style={{...styles.statIcon, ...styles.statIconBlue}}><FileText size={24}/></div>
                            <div>
                                <h3 style={{margin: 0, fontSize: '1.125rem'}}>Relatório de Licitações</h3>
                                <p style={{margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.875rem'}}>
                                    Exporta todas as licitações e seus respectivos medicamentos.
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #e5e7eb'}}>
                            <button onClick={() => onExport('licitacoes', 'csv')} style={{...styles.button, ...styles.buttonSecondary}}>
                                <Download size={16} /> Exportar CSV
                            </button>
                            <button onClick={() => onExport('licitacoes', 'xlsx')} style={{...styles.button, ...styles.buttonPrimary}}>
                                <Download size={16} /> Exportar XLSX
                            </button>
                        </div>
                    </div>

                    {/* Card de Relatório de Alertas */}
                    <div style={{...styles.card, margin: 0, border: '1px solid #fecaca'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                            <div style={{...styles.statIcon, ...styles.statIconRed}}><AlertTriangle size={24}/></div>
                            <div>
                                <h3 style={{margin: 0, fontSize: '1.125rem'}}>Relatório de Alertas</h3>
                                <p style={{margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.875rem'}}>
                                    Exporta todos os alertas de risco de PMVG e contratuais.
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #e5e7eb'}}>
                             <button onClick={() => onExport('alertas', 'csv')} style={{...styles.button, ...styles.buttonSecondary}}>
                                <Download size={16} /> Exportar CSV
                            </button>
                            <button onClick={() => onExport('alertas', 'xlsx')} style={{...styles.button, ...styles.buttonPrimary}}>
                                <Download size={16} /> Exportar XLSX
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
