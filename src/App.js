import React, { useState, useEffect } from 'react';
import { 
  Shield, FileText, AlertTriangle, Clock, Upload, Download, 
  Settings, User, LogOut, RefreshCw, CheckCircle, XCircle,
  Calendar, DollarSign, Building, Users, Target, Bell,
  Activity, TrendingUp, BarChart3, FileSpreadsheet, Plus,
  Search, Filter, Edit, Trash2, Eye, Save, X, Mail,
  Calculator, DocumentText, Printer, Package, TrendingDown,
  TrendingUp as TrendingUpIcon, AlertCircle, Award, FileDown,
  PieChart, BarChart, LineChart, ShoppingCart, Pill, Database,
  ExternalLink, ChevronRight, AlertOctagon, CheckSquare
} from 'lucide-react';

// URL do backend no Render
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://sistema-pmvg-backend-1.onrender.com/api';

// ✅ Debug para verificar URL da API
console.log('🌐 API Base URL configurada:', API_BASE_URL);
console.log('🔧 Variável de ambiente REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

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
  badgeDanger: {
    backgroundColor: '#dc2626',
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
  statIconBlue: {
    backgroundColor: '#dbeafe',
    color: '#2563eb'
  },
  statIconGreen: {
    backgroundColor: '#dcfce7',
    color: '#16a34a'
  },
  statIconRed: {
    backgroundColor: '#fee2e2',
    color: '#dc2626'
  },
  statIconYellow: {
    backgroundColor: '#fef3c7',
    color: '#d97706'
  },
  statText: {
    flex: 1
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280',
    margin: 0
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0
  },
  statSubtitle: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    margin: 0
  },
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
  buttonPrimary: {
    backgroundColor: '#2563eb',
    color: 'white'
  },
  buttonSecondary: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  buttonSuccess: {
    backgroundColor: '#16a34a',
    color: 'white'
  },
  buttonDanger: {
    backgroundColor: '#dc2626',
    color: 'white'
  },
  buttonWarning: {
    backgroundColor: '#d97706',
    color: 'white'
  },
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
  formGroupRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  formGroupRow3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
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
  priceLabel: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  priceValue: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem'
  },
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
  alertSuccess: {
    backgroundColor: '#dcfce7',
    borderColor: '#86efac',
    color: '#15803d'
  },
  alertError: {
    backgroundColor: '#fee2e2',
    borderColor: '#fca5a5',
    color: '#b91c1c'
  },
  alertWarning: {
    backgroundColor: '#fef3c7',
    borderColor: '#fcd34d',
    color: '#92400e'
  },
  alertInfo: {
    backgroundColor: '#dbeafe',
    borderColor: '#93c5fd',
    color: '#1e40af'
  },
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
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    backgroundColor: 'white'
  },
  searchResultHover: {
    backgroundColor: '#f0f9ff',
    borderColor: '#2563eb'
  },
  searchResultSelected: {
    backgroundColor: '#dbeafe',
    borderColor: '#2563eb'
  },
  // ✅ NOVO: Estilos para Central de Ações
  actionItem: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    borderLeft: '4px solid #dc2626'
  },
  actionButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginRight: '0.5rem',
    marginTop: '0.5rem'
  }
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

  // Adicionar estilos de animação
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

  const checkMonthlyNotifications = () => {
    const hoje = new Date();
    const ultimaNotificacao = localStorage.getItem('ultimaNotificacaoMensal');
    const ultimaData = ultimaNotificacao ? new Date(ultimaNotificacao) : null;
    
    const umMesAtras = new Date();
    umMesAtras.setMonth(umMesAtras.getMonth() - 1);
    
    const isDia28 = hoje.getDate() === 28;
    const tempoParaNotificar = !ultimaData || ultimaData < umMesAtras || isDia28;
    
    if (tempoParaNotificar) {
      const notificacao = {
        id: `notif-mensal-${Date.now()}`,
        tipo: 'notificacao_mensal',
        titulo: 'Lembrete: Atualização Mensal de Preços PMVG',
        descricao: 'É recomendado atualizar os preços de fábrica mensalmente para manter a precisão dos relatórios e evitar riscos contratuais. A base PMVG é atualizada automaticamente todo dia 28.',
        prioridade: 'media',
        status: 'ativo',
        data_geracao: new Date().toISOString(),
        acao_requerida: 'Revisar e atualizar preços de fábrica dos medicamentos',
        prazo_recomendado: '7 dias'
      };
      
      setAlertas(prev => [...prev, notificacao]);
      localStorage.setItem('ultimaNotificacaoMensal', hoje.toISOString());
      
      sendEmailNotification('monthly_reminder', {
        titulo: notificacao.titulo,
        descricao: notificacao.descricao,
        acaoRequerida: notificacao.acao_requerida,
        prazo: notificacao.prazo_recomendado
      });
      
      showMessage('info', 'Lembrete mensal enviado: Atualize os preços de fábrica');
    }
  };

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

  const sendEmailNotification = async (type, data) => {
    try {
      const response = await api('/notifications/email', {
        method: 'POST',
        body: JSON.stringify({
          type,
          recipient: user.email,
          data
        })
      });
      
      if (response) {
        console.log('📧 Email enviado com sucesso:', type);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  };

  const openEmailConfig = () => {
    setEmailConfig(prev => ({
      ...prev,
      email: user?.email || ''
    }));
    setShowEmailModal(true);
  };

  // ✅ NOVO: Testar conectividade e forçar reload
  const testConnectivity = async () => {
    setLoading(true);
    showMessage('info', '🔄 Testando conectividade com backend...');
    
    try {
      const healthResponse = await fetch(`${API_BASE_URL}/health`, {
        method: 'GET',
        timeout: 10000
      });
      
      if (!healthResponse.ok) {
        throw new Error(`Backend retornou status ${healthResponse.status}`);
      }
      
      showMessage('success', '✅ Backend conectado! Atualizando dados...');
      
      await loadSystemStatus();
      await loadData();
      
      showMessage('success', '✅ Dados atualizados com sucesso!');
    } catch (error) {
      console.error('❌ Erro na conectividade:', error);
      showMessage('error', `❌ Erro: ${error.message}. Verifique se o backend está rodando no Render.`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ CORRIGIDO: Função deleteLicitacao funcionando
  const deleteLicitacao = async (licitacaoId) => {
    if (window.confirm('⚠️ Tem certeza que deseja EXCLUIR esta licitação? Esta ação não pode ser desfeita.')) {
      try {
        const response = await api(`/licitacoes/${licitacaoId}`, {
          method: 'DELETE'
        });
        
        if (response && response.sucesso) {
          showMessage('success', 'Licitação excluída com sucesso!');
          await loadData();
        } else {
          throw new Error(response?.message || 'Erro ao excluir licitação');
        }
      } catch (error) {
        showMessage('error', error.message || 'Erro ao excluir licitação');
      }
    }
  };

  const resolverAlerta = async (alertaId) => {
    try {
      const response = await api(`/alertas/${alertaId}/resolver`, {
        method: 'PUT'
      });
      
      if (response) {
        showMessage('success', 'Alerta marcado como resolvido!');
        await loadData();
      }
    } catch (error) {
      showMessage('error', 'Erro ao resolver alerta');
    }
  };

  const openModal = (type, data = null) => {
    setModalType(type);
    setSelectedLicitacao(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedLicitacao(null);
  };

  // ✅ CORRIGIDO: Função searchMedicamentos com dados reais
  const searchMedicamentos = async (searchTerm) => {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    try {
      console.log('🔍 Buscando medicamentos:', searchTerm);
      console.log('🌐 API URL:', `${API_BASE_URL}/medicamentos/search?q=${encodeURIComponent(searchTerm)}`);
      
      const response = await api(`/medicamentos/search?q=${encodeURIComponent(searchTerm)}`);
      
      if (!response) {
        console.warn('⚠️ Resposta vazia da API');
        showMessage('error', 'Backend não respondeu. Verifique se está rodando no Render.');
        return [];
      }
      
      if (Array.isArray(response) && response.length === 0) {
        console.warn('⚠️ Nenhum medicamento encontrado na base');
        showMessage('warning', `Nenhum medicamento encontrado para "${searchTerm}". Base pode não estar sincronizada.`);
        return [];
      }
      
      console.log('✅ Medicamentos encontrados:', response.length);
      return response;
    } catch (error) {
      console.error('❌ Erro ao buscar medicamentos:', error);
      showMessage('error', `Erro na busca: ${error.message || 'Servidor não conectado'}`);
      return [];
    }
  };

  // ✅ NOVO: Abrir Central de Ações Urgentes
  const openAcoesUrgentes = () => {
    setCurrentView('acoes-urgentes');
  };

  // Calcular alertas críticos
  const alertasCriticos = alertas.filter(a => a.status === 'ativo' && a.prioridade === 'alta');
  const medicamentosComRisco = licitacoes.reduce((total, lic) => {
    return total + (lic.medicamentos_com_risco || 0);
  }, 0);

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
            <div style={{ fontSize: '0.875rem', color: '#374151', marginRight: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Bell size={14} />
                <span style={{ fontSize: '0.75rem' }}>
                  Última notificação: {localStorage.getItem('ultimaNotificacaoMensal') ? 
                    new Date(localStorage.getItem('ultimaNotificacaoMensal')).toLocaleDateString('pt-BR') : 
                    'Nunca'
                  }
                </span>
              </div>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#374151' }}>
              <span style={{ fontWeight: '500' }}>{user.name}</span>
              <span style={{ color: '#9ca3af', marginLeft: '0.5rem' }}>({user.role})</span>
            </div>
            <button
              onClick={logout}
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              <LogOut size={16} />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          zIndex: 1000,
          ...styles.alert,
          ...styles[`alert${message.type.charAt(0).toUpperCase() + message.type.slice(1)}`]
        }}>
          {message.text}
        </div>
      )}

      <div style={styles.main}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <NavButton
            icon={BarChart3}
            label="Dashboard"
            active={currentView === 'dashboard'}
            onClick={() => setCurrentView('dashboard')}
          />
          <NavButton
            icon={Database}
            label="Base PMVG"
            active={currentView === 'pmvg'}
            onClick={() => setCurrentView('pmvg')}
            badge={pmvgStatus?.totalMedicamentos || ''}
          />
          <NavButton
            icon={FileText}
            label="Licitações"
            active={currentView === 'licitacoes'}
            onClick={() => setCurrentView('licitacoes')}
            badge={licitacoes.length}
          />
          <NavButton
            icon={AlertTriangle}
            label="Alertas"
            active={currentView === 'alertas'}
            onClick={() => setCurrentView('alertas')}
            badge={alertasCriticos.length}
            badgeType={alertasCriticos.length > 0 ? 'danger' : 'normal'}
          />
          {/* ✅ NOVO: Central de Ações Urgentes */}
          <NavButton
            icon={AlertOctagon}
            label="Ações Urgentes"
            active={currentView === 'acoes-urgentes'}
            onClick={() => setCurrentView('acoes-urgentes')}
            badge={medicamentosComRisco}
            badgeType={medicamentosComRisco > 0 ? 'danger' : 'normal'}
          />
          <NavButton
            icon={Calculator}
            label="Comparação Preços"
            active={currentView === 'comparacao'}
            onClick={() => setCurrentView('comparacao')}
          />
          <NavButton
            icon={FileDown}
            label="Relatórios"
            active={currentView === 'relatorios'}
            onClick={() => setCurrentView('relatorios')}
          />
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {currentView === 'dashboard' && (
            <DashboardView 
              systemStatus={systemStatus}
              licitacoes={licitacoes}
              alertas={alertas}
              pmvgStatus={pmvgStatus}
              user={user}
              checkMonthlyNotifications={checkMonthlyNotifications}
              openEmailConfig={openEmailConfig}
              openAcoesUrgentes={openAcoesUrgentes}
              medicamentosComRisco={medicamentosComRisco}
            />
          )}
          {currentView === 'pmvg' && (
            <PMVGView
              pmvgStatus={pmvgStatus}
              loading={loading}
              isAdmin={user.role === 'admin'}
              searchMedicamentos={searchMedicamentos}
              testConnectivity={testConnectivity}
            />
          )}
          {currentView === 'licitacoes' && (
            <LicitacoesView 
              licitacoes={licitacoes}
              onOpenModal={openModal}
              onDelete={deleteLicitacao}
              user={user}
            />
          )}
          {currentView === 'alertas' && (
            <AlertasView 
              alertas={alertas}
              pmvgStatus={pmvgStatus}
              onResolverAlerta={resolverAlerta}
            />
          )}
          {/* ✅ NOVO: Central de Ações Urgentes */}
          {currentView === 'acoes-urgentes' && (
            <AcoesUrgentesView 
              licitacoes={licitacoes}
              alertas={alertas}
              medicamentosComRisco={medicamentosComRisco}
              onOpenModal={openModal}
            />
          )}
          {currentView === 'comparacao' && (
            <ComparacaoView
              licitacoes={licitacoes}
              searchMedicamentos={searchMedicamentos}
            />
          )}
          {currentView === 'relatorios' && (
            <RelatoriosView
              licitacoes={licitacoes}
              alertas={alertas}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal 
          type={modalType} 
          data={selectedLicitacao}
          searchMedicamentos={searchMedicamentos}
          onClose={closeModal}
          onSave={modalType === 'licitacao' ? () => { loadData(); closeModal(); } : closeModal}
          api={api}
        />
      )}

      {/* Modal de Email */}
      {showEmailModal && (
        <EmailConfigModal 
          emailConfig={emailConfig}
          setEmailConfig={setEmailConfig}
          onSave={() => setShowEmailModal(false)}
          onClose={() => setShowEmailModal(false)}
        />
      )}
    </div>
  );
}

// ===== COMPONENTES =====

// Componente de Login
const LoginScreen = ({ onLogin, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={styles.loginHeader}>
          <Shield style={{ ...styles.logoIcon, margin: '0 auto 1rem' }} />
          <h1 style={{ ...styles.title, fontSize: '1.5rem' }}>Sistema PMVG</h1>
          <p style={styles.subtitle}>Preço Máximo de Venda ao Governo</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...styles.buttonPrimary,
              width: '100%',
              justifyContent: 'center',
              opacity: loading ? 0.5 : 1
            }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#6b7280', textAlign: 'center' }}>
          <p style={{ marginBottom: '0.5rem' }}>👤 Usuários de demonstração:</p>
          <p><strong>Admin:</strong> admin@sistema.com / 123456</p>
          <p><strong>Cliente:</strong> usuario@sistema.com / 123456</p>
        </div>
      </div>
    </div>
  );
};

// Componente de Navegação
const NavButton = ({ icon: Icon, label, active, onClick, badge, badgeType = 'normal' }) => (
  <button
    onClick={onClick}
    style={{
      ...styles.navButton,
      ...(active ? styles.navButtonActive : {})
    }}
  >
    <Icon size={20} />
    <span style={{ flex: 1 }}>{label}</span>
    {badge && (
      <span style={badgeType === 'danger' ? styles.badgeDanger : styles.badge}>
        {badge}
      </span>
    )}
  </button>
);

// Dashboard View
const DashboardView = ({ systemStatus, licitacoes, alertas, pmvgStatus, user, checkMonthlyNotifications, openEmailConfig, openAcoesUrgentes, medicamentosComRisco }) => {
  const alertasAtivos = alertas.filter(a => a.status === 'ativo');
  const alertasCriticos = alertasAtivos.filter(a => a.prioridade === 'alta');
  const licitacoesAtivas = licitacoes.filter(l => l.status === 'ativa');
  
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Dashboard - Sistema PMVG Avançado</h2>
        
        <div style={styles.statsGrid}>
          <StatCard
            title="Base PMVG"
            value={pmvgStatus?.totalMedicamentos || 'Carregando...'}
            icon={Database}
            color="blue"
            subtitle="Dados reais ANVISA"
          />
          <StatCard
            title="Licitações Ativas"
            value={licitacoesAtivas.length}
            icon={FileText}
            color="green"
            subtitle="Em acompanhamento"
          />
          <StatCard
            title="Alertas Críticos"
            value={alertasCriticos.length}
            icon={AlertCircle}
            color="red"
            subtitle="Requerem atenção"
          />
          <StatCard
            title="Riscos Contratuais"
            value={medicamentosComRisco}
            icon={AlertTriangle}
            color="yellow"
            subtitle="Preço fábrica > ofertado"
          />
        </div>
      </div>

      {/* Status da Automação PMVG */}
      <div style={styles.card}>
        <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
          Status da Integração PMVG - ANVISA
        </h3>
        
        <div style={{ 
          background: pmvgStatus?.totalMedicamentos > 0 ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
          borderLeft: `4px solid ${pmvgStatus?.totalMedicamentos > 0 ? '#16a34a' : '#dc2626'}`,
          padding: '1rem',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: pmvgStatus?.totalMedicamentos > 0 ? '#16a34a' : '#dc2626', fontWeight: '600' }}>
              <RefreshCw size={20} />
              <span>{pmvgStatus?.totalMedicamentos > 0 ? '✅ Sistema Conectado com Dados Reais' : '❌ Aguardando Sincronização'}</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: pmvgStatus?.totalMedicamentos > 0 ? '#15803d' : '#b91c1c' }}>
              {pmvgStatus?.totalMedicamentos > 0 ? `${pmvgStatus.totalMedicamentos} medicamentos` : 'Carregando base...'}
            </div>
          </div>
          
          {pmvgStatus?.totalMedicamentos > 0 ? (
            <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
              <strong>✅ Integração ativa:</strong> Base PMVG sincronizada com dados reais da ANVISA/CMED
            </div>
          ) : (
            <div style={{ fontSize: '0.875rem', color: '#b91c1c' }}>
              <strong>🔄 Primeira sincronização:</strong> Backend processando dados da ANVISA... Aguarde alguns minutos.
            </div>
          )}
        </div>
      </div>

      {/* Alertas de Ação Urgente */}
      {medicamentosComRisco > 0 && (
        <div style={styles.card}>
          <div style={{ ...styles.alert, ...styles.alertError, margin: 0, cursor: 'pointer' }} onClick={openAcoesUrgentes}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'between', gap: '0.5rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={20} />
                  <strong>🚨 AÇÃO URGENTE NECESSÁRIA</strong>
                </div>
                <p style={{ margin: '0.5rem 0 0 0' }}>
                  {medicamentosComRisco} medicamento(s) com risco de descumprimento contratual. 
                  Notifique os órgãos licitantes imediatamente para evitar multas.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Ver Ações</span>
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Configurações */}
      <div style={styles.card}>
        <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
          Configurações do Sistema
        </h3>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            onClick={checkMonthlyNotifications}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            <Bell size={16} />
            Testar Notificação
          </button>
          <button 
            onClick={openEmailConfig}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            <Settings size={16} />
            Configurar Emails
          </button>
          {medicamentosComRisco > 0 && (
            <button 
              onClick={openAcoesUrgentes}
              style={{ ...styles.button, ...styles.buttonDanger }}
            >
              <AlertOctagon size={16} />
              Central de Ações ({medicamentosComRisco})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// PMVG View
const PMVGView = ({ pmvgStatus, loading, isAdmin, searchMedicamentos, testConnectivity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    if (term.length >= 2) {
      setIsSearching(true);
      try {
        const results = await searchMedicamentos(term);
        setSearchResults(results);
      } catch (error) {
        console.error('Erro na busca:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Base de Dados PMVG - ANVISA</h2>
        
        {/* Status da Atualização */}
        <div style={{ 
          background: pmvgStatus?.totalMedicamentos > 0 ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
          borderLeft: `4px solid ${pmvgStatus?.totalMedicamentos > 0 ? '#16a34a' : '#dc2626'}`,
          padding: '1rem',
          borderRadius: '6px',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: pmvgStatus?.totalMedicamentos > 0 ? '#16a34a' : '#dc2626', fontWeight: '600' }}>
              <Database size={20} />
              <span>{pmvgStatus?.totalMedicamentos > 0 ? '✅ Base PMVG Sincronizada com Dados Reais' : '❌ Aguardando Sincronização ANVISA'}</span>
            </div>
            <button
              onClick={testConnectivity}
              disabled={loading}
              style={{ 
                ...styles.button, 
                ...(pmvgStatus?.totalMedicamentos > 0 ? styles.buttonSecondary : styles.buttonPrimary),
                opacity: loading ? 0.6 : 1
              }}
            >
              <RefreshCw size={16} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
              {loading ? 'Testando...' : 'Verificar Conexão'}
            </button>
          </div>
          
          {pmvgStatus?.totalMedicamentos > 0 ? (
            <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
              <strong>📊 Base atual:</strong> {pmvgStatus.totalMedicamentos} medicamentos da ANVISA/CMED • 
              <strong> Busca funcionando</strong> com dados reais
            </div>
          ) : (
            <div style={{ fontSize: '0.875rem', color: '#b91c1c' }}>
              <strong>🔄 Primeira sincronização:</strong> Backend baixando dados da ANVISA... 
              <strong> Aguarde 2-5 minutos</strong> para carregar a base completa.
            </div>
          )}
        </div>

        {/* Busca Inteligente */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <Search size={16} style={{ 
              position: 'absolute', 
              left: '0.75rem', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af' 
            }} />
            <input
              type="text"
              placeholder="Digite o nome do medicamento (ex: dipirona, omeprazol, amoxicilina...)"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ ...styles.input, paddingLeft: '2.5rem' }}
            />
            {isSearching && (
              <RefreshCw size={16} style={{ 
                position: 'absolute', 
                right: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#2563eb',
                animation: 'spin 1s linear infinite'
              }} />
            )}
          </div>
        </div>

        {/* Resultados da Busca */}
        {searchTerm.length >= 2 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
              Resultados da Busca {searchResults.length > 0 && `(${searchResults.length} encontrados)`}
            </h4>
            
            {searchResults.length === 0 && !isSearching && (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                <Search size={24} style={{ margin: '0 auto 0.5rem', color: '#d1d5db' }} />
                <p style={{ margin: 0 }}>Nenhum medicamento encontrado para "{searchTerm}"</p>
              </div>
            )}

            {searchResults.length > 0 && (
              <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Código</th>
                      <th style={styles.th}>Medicamento</th>
                      <th style={styles.th}>Laboratório</th>
                      <th style={styles.th}>PMVG</th>
                      <th style={styles.th}>Preço Fábrica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.slice(0, 50).map(med => (
                      <tr key={med.id || med.codigo}>
                        <td style={styles.td}>{med.codigo}</td>
                        <td style={styles.td}>
                          <div>
                            <div style={{ fontWeight: '500', color: '#1f2937' }}>{med.nome}</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{med.apresentacao}</div>
                          </div>
                        </td>
                        <td style={styles.td}>{med.laboratorio}</td>
                        <td style={styles.td}>
                          <span style={{ fontWeight: '500', color: '#16a34a' }}>
                            R$ {med.pmvg.toFixed(2)}
                          </span>
                        </td>
                        <td style={styles.td}>
                          <span style={{ fontWeight: '500', color: '#2563eb' }}>
                            R$ {(med.preco_fabrica || 0).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Instruções */}
        {searchTerm.length < 2 && (
          <div style={{ 
            padding: '3rem 1rem', 
            textAlign: 'center', 
            backgroundColor: pmvgStatus?.totalMedicamentos > 0 ? '#f9fafb' : '#fef2f2', 
            borderRadius: '8px',
            border: `2px dashed ${pmvgStatus?.totalMedicamentos > 0 ? '#e5e7eb' : '#fecaca'}`
          }}>
            <Database size={64} style={{ margin: '0 auto 1rem', color: pmvgStatus?.totalMedicamentos > 0 ? '#d1d5db' : '#dc2626' }} />
            
            {pmvgStatus?.totalMedicamentos > 0 ? (
              <>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#374151' }}>
                  🎉 Busca com Dados Reais da ANVISA
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                  Digite o nome de qualquer medicamento acima para buscar instantaneamente 
                  na base real da ANVISA com <strong>{pmvgStatus.totalMedicamentos} medicamentos</strong> atualizados automaticamente.
                </p>
              </>
            ) : (
              <>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#dc2626' }}>
                  ⏳ Carregando Base Real da ANVISA
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: '#b91c1c', maxWidth: '600px', margin: '0 auto' }}>
                  Backend está fazendo a primeira sincronização com dados reais da ANVISA/CMED. 
                  <strong>Aguarde alguns minutos</strong> para ter acesso à base completa.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Licitações View
const LicitacoesView = ({ licitacoes, onOpenModal, onDelete, user }) => (
  <div>
    <div style={styles.card}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={styles.cardTitle}>Gestão de Licitações PMVG</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => onOpenModal('licitacao')}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            <Plus size={16} />
            Nova Licitação
          </button>
        </div>
      </div>

      {licitacoes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
          <FileText size={64} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Nenhuma licitação cadastrada</h3>
          <p style={{ margin: '0 0 1rem 0' }}>Comece criando sua primeira licitação com sistema PMVG</p>
          <button
            onClick={() => onOpenModal('licitacao')}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            <Plus size={16} />
            Criar Primeira Licitação
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {licitacoes.map(licitacao => {
            const diasRestantes = Math.ceil((new Date(licitacao.data_vencimento) - new Date()) / (1000 * 60 * 60 * 24));
            const isVencendo = diasRestantes <= 7;
            const medicamentosComRisco = licitacao.medicamentos_com_risco || 0;
            
            return (
              <div key={licitacao.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                padding: '1.5rem',
                borderLeft: `4px solid ${isVencendo ? '#dc2626' : medicamentosComRisco > 0 ? '#d97706' : '#16a34a'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>
                      {licitacao.numero}
                    </h4>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#6b7280' }}>
                      {licitacao.orgao}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                      <span>
                        <Calendar size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        Vencimento: {new Date(licitacao.data_vencimento).toLocaleDateString('pt-BR')}
                      </span>
                      <span>
                        <DollarSign size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        Valor: R$ {licitacao.valor?.toLocaleString('pt-BR')}
                      </span>
                      <span style={{ color: isVencendo ? '#dc2626' : '#16a34a' }}>
                        <Clock size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        {diasRestantes > 0 ? `${diasRestantes} dias restantes` : 'Vencida'}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => onOpenModal('licitacao', licitacao)}
                      style={{ ...styles.button, ...styles.buttonSecondary }}
                    >
                      <Edit size={16} />
                      Editar
                    </button>
                    {/* ✅ NOVO: Botão Visualizar funcionando */}
                    <button 
                      onClick={() => onOpenModal('visualizar', licitacao)}
                      style={{ ...styles.button, ...styles.buttonPrimary }}
                    >
                      <Eye size={16} />
                      Visualizar
                    </button>
                    {user.role === 'admin' && (
                      <button 
                        onClick={() => onDelete(licitacao.id)}
                        style={{ ...styles.button, ...styles.buttonDanger }}
                      >
                        <Trash2 size={16} />
                        Excluir
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Alertas de Risco */}
                {medicamentosComRisco > 0 && (
                  <div style={{ ...styles.alert, ...styles.alertWarning, margin: '0 0 1rem 0', padding: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <AlertTriangle size={16} />
                      <strong>Risco de Multa Detectado</strong>
                    </div>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                      {medicamentosComRisco} medicamento(s) com risco de descumprimento contratual. 
                      Ação urgente necessária para evitar penalidades.
                    </p>
                  </div>
                )}
                
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  padding: '1rem', 
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb'
                }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '500', color: '#1f2937' }}>
                    Medicamentos: {licitacao.total_medicamentos || 0}
                  </h5>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <div style={{ color: '#16a34a' }}>
                      <strong>✅ Conformes:</strong> {(licitacao.total_medicamentos || 0) - medicamentosComRisco}
                    </div>
                    <div style={{ color: '#dc2626' }}>
                      <strong>⚠️ Em Risco:</strong> {medicamentosComRisco}
                    </div>
                    <div style={{ color: '#2563eb' }}>
                      <strong>💰 Economia:</strong> R$ {(licitacao.economia_total || 0).toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  </div>
);

// Alertas View
const AlertasView = ({ alertas, pmvgStatus, onResolverAlerta }) => {
  const alertasAtivos = alertas.filter(a => a.status === 'ativo');

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Central de Alertas PMVG</h2>

        {alertasAtivos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
            <CheckCircle size={64} style={{ margin: '0 auto 1rem', color: '#16a34a' }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Sistema em Perfeita Conformidade</h3>
            <p style={{ margin: 0 }}>Nenhum risco de multa detectado no momento</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {alertasAtivos.map(alerta => (
              <div key={alerta.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                padding: '1.5rem',
                borderLeft: `4px solid ${alerta.prioridade === 'alta' ? '#dc2626' : '#d97706'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <AlertTriangle size={16} style={{ color: '#dc2626' }} />
                      <h4 style={{ margin: 0, fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>
                        {alerta.titulo}
                      </h4>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: alerta.prioridade === 'alta' ? '#fee2e2' : '#fef3c7',
                        color: alerta.prioridade === 'alta' ? '#dc2626' : '#d97706'
                      }}>
                        {alerta.prioridade.toUpperCase()}
                      </span>
                    </div>
                    
                    <p style={{ margin: '0 0 1rem 0', color: '#6b7280', lineHeight: 1.5 }}>
                      {alerta.descricao}
                    </p>
                    
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.75rem' }}>
                      Gerado em: {new Date(alerta.data_geracao || Date.now()).toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                    <button 
                      onClick={() => onResolverAlerta(alerta.id)}
                      style={{ ...styles.button, ...styles.buttonSuccess }}
                    >
                      <CheckCircle size={16} />
                      Resolver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ NOVO: Central de Ações Urgentes
const AcoesUrgentesView = ({ licitacoes, alertas, medicamentosComRisco, onOpenModal }) => {
  const licitacoesComRisco = licitacoes.filter(l => l.medicamentos_com_risco > 0);
  const alertasCriticos = alertas.filter(a => a.status === 'ativo' && a.prioridade === 'alta');

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>🚨 Central de Ações Urgentes</h2>
        
        {medicamentosComRisco === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
            <CheckSquare size={64} style={{ margin: '0 auto 1rem', color: '#16a34a' }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#16a34a' }}>
              ✅ Nenhuma Ação Urgente Necessária
            </h3>
            <p style={{ margin: 0 }}>
              Todas as licitações estão em conformidade com a PMVG. 
              Sistema funcionando perfeitamente!
            </p>
          </div>
        ) : (
          <div>
            <div style={{ ...styles.alert, ...styles.alertError, marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertOctagon size={20} />
                <strong>SITUAÇÃO CRÍTICA DETECTADA</strong>
              </div>
              <p style={{ margin: '0.5rem 0 0 0' }}>
                <strong>{medicamentosComRisco} medicamentos</strong> em {licitacoesComRisco.length} licitação(ões) 
                apresentam risco de descumprimento contratual. <strong>Ação imediata necessária!</strong>
              </p>
            </div>

            <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem', marginTop: '2rem' }}>
              📋 Licitações Críticas ({licitacoesComRisco.length})
            </h3>

            {licitacoesComRisco.map(licitacao => (
              <div key={licitacao.id} style={styles.actionItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#1f2937' }}>
                      {licitacao.numero} - {licitacao.orgao}
                    </h4>
                    <div style={{ fontSize: '0.875rem', color: '#dc2626', marginBottom: '0.5rem' }}>
                      <AlertTriangle size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                      <strong>{licitacao.medicamentos_com_risco} medicamentos com risco contratual</strong>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      Vencimento: {new Date(licitacao.data_vencimento).toLocaleDateString('pt-BR')} • 
                      Valor: R$ {licitacao.valor?.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => onOpenModal('visualizar', licitacao)}
                      style={{ ...styles.button, ...styles.buttonPrimary }}
                    >
                      <Eye size={16} />
                      Analisar
                    </button>
                    <button 
                      onClick={() => onOpenModal('licitacao', licitacao)}
                      style={{ ...styles.button, ...styles.buttonWarning }}
                    >
                      <Edit size={16} />
                      Corrigir
                    </button>
                  </div>
                </div>

                <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', fontWeight: '600', color: '#dc2626' }}>
                    🎯 Ações Recomendadas:
                  </h5>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <button style={styles.actionButton}>
                      <Mail size={14} />
                      Notificar Órgão Licitante
                    </button>
                    <button style={styles.actionButton}>
                      <Calculator size={14} />
                      Ajustar Preços de Fábrica
                    </button>
                    <button style={styles.actionButton}>
                      <DocumentText size={14} />
                      Solicitar Majoração
                    </button>
                    <button style={styles.actionButton}>
                      <AlertTriangle size={14} />
                      Gerar Relatório de Risco
                    </button>
                  </div>

                  <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#7f1d1d', backgroundColor: '#fef2f2', padding: '0.5rem', borderRadius: '4px' }}>
                    <strong>⚠️ IMPORTANTE:</strong> Preços de fábrica superiores aos ofertados podem resultar em 
                    descumprimento contratual e aplicação de multas. Ação urgente necessária em até 48h.
                  </div>
                </div>
              </div>
            ))}

            {alertasCriticos.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
                  🔔 Alertas Críticos Adicionais ({alertasCriticos.length})
                </h3>
                
                {alertasCriticos.map(alerta => (
                  <div key={alerta.id} style={styles.actionItem}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#dc2626' }}>
                      {alerta.titulo}
                    </h4>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
                      {alerta.descricao}
                    </p>
                    
                    {alerta.acao_requerida && (
                      <div style={{ fontSize: '0.875rem', color: '#dc2626' }}>
                        <strong>Ação necessária:</strong> {alerta.acao_requerida}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Comparação View
const ComparacaoView = ({ licitacoes, searchMedicamentos }) => {
  const [selectedMedicamento, setSelectedMedicamento] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    if (term.length >= 2) {
      setIsSearching(true);
      try {
        const results = await searchMedicamentos(term);
        setSearchResults(results.slice(0, 10));
      } catch (error) {
        console.error('Erro na busca:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  const selectMedicamento = (medicamento) => {
    setSelectedMedicamento(medicamento);
    setSearchTerm(medicamento.nome);
    setSearchResults([]);
  };

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Comparação Inteligente de Preços</h2>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Buscar Medicamento</label>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ 
              position: 'absolute', 
              left: '0.75rem', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af' 
            }} />
            <input
              type="text"
              placeholder="Digite o nome do medicamento..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ ...styles.input, paddingLeft: '2.5rem' }}
            />
            {isSearching && (
              <RefreshCw size={16} style={{ 
                position: 'absolute', 
                right: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#2563eb',
                animation: 'spin 1s linear infinite'
              }} />
            )}
          </div>
          
          {/* Resultados da busca */}
          {searchResults.length > 0 && (
            <div style={{ 
              position: 'absolute', 
              zIndex: 10, 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '6px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              maxHeight: '200px',
              overflowY: 'auto',
              width: '100%',
              marginTop: '0.25rem'
            }}>
              {searchResults.map(med => (
                <div
                  key={med.id || med.codigo}
                  onClick={() => selectMedicamento(med)}
                  style={styles.searchResult}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f9ff'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <div style={{ fontWeight: '500', fontSize: '0.875rem' }}>{med.nome}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                    {med.laboratorio} - PMVG: R$ {med.pmvg.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedMedicamento && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Análise de Preços: {selectedMedicamento.nome}
            </h3>
            
            <div style={styles.priceComparison}>
              <div style={styles.priceBox}>
                <div style={styles.priceLabel}>Preço PMVG (Máximo)</div>
                <div style={{ ...styles.priceValue, color: '#2563eb' }}>
                  R$ {selectedMedicamento.pmvg.toFixed(2)}
                </div>
                <div style={{ ...styles.priceChange, color: '#2563eb' }}>
                  <Shield size={14} />
                  Referência ANVISA
                </div>
              </div>
              
              <div style={styles.priceBox}>
                <div style={styles.priceLabel}>Preço de Fábrica</div>
                <div style={{ 
                  ...styles.priceValue, 
                  color: (selectedMedicamento.preco_fabrica || 0) > selectedMedicamento.pmvg ? '#dc2626' : '#16a34a' 
                }}>
                  R$ {(selectedMedicamento.preco_fabrica || 0).toFixed(2)}
                </div>
                <div style={{ ...styles.priceChange, color: '#6b7280' }}>
                  <Calendar size={14} />
                  Dados ANVISA
                </div>
              </div>
              
              <div style={styles.priceBox}>
                <div style={styles.priceLabel}>Preço Sugerido</div>
                <div style={{ ...styles.priceValue, color: '#16a34a' }}>
                  R$ {(selectedMedicamento.pmvg * 0.95).toFixed(2)}
                </div>
                <div style={{ ...styles.priceChange, color: '#16a34a' }}>
                  <Award size={14} />
                  95% da PMVG
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>
                Análise de Conformidade Anti-Multa
              </h4>
              
              {(selectedMedicamento.preco_fabrica || 0) > selectedMedicamento.pmvg ? (
                <div style={{ ...styles.alert, ...styles.alertError, margin: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <XCircle size={16} />
                    <strong>⚠️ RISCO DE MULTA</strong>
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0' }}>
                    Preço de fábrica (R$ {(selectedMedicamento.preco_fabrica || 0).toFixed(2)}) está acima da PMVG. 
                    Não oferte acima de R$ {selectedMedicamento.pmvg.toFixed(2)}.
                  </p>
                </div>
              ) : (
                <div style={{ ...styles.alert, ...styles.alertSuccess, margin: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} />
                    <strong>✅ CONFORME</strong>
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0' }}>
                    Medicamento está dentro dos parâmetros da PMVG. 
                    Margem disponível: R$ {(selectedMedicamento.pmvg - (selectedMedicamento.preco_fabrica || 0)).toFixed(2)} por unidade.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Relatórios View
const RelatoriosView = ({ licitacoes, alertas }) => {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Central de Relatórios e Compliance</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="#2563eb" />
              Status Anti-Multa
            </h4>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
              Visão geral dos riscos de multa e conformidade
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div>Licitações: <strong>{licitacoes.length}</strong></div>
              <div>Alertas: <strong>{alertas.length}</strong></div>
              <div style={{ color: '#16a34a' }}>Conformes: <strong>{licitacoes.filter(l => !l.tem_riscos).length}</strong></div>
              <div style={{ color: '#dc2626' }}>Em Risco: <strong>{licitacoes.filter(l => l.tem_riscos).length}</strong></div>
            </div>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingDown size={20} color="#16a34a" />
              Economia Realizada
            </h4>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
              Total de economia com preços otimizados
            </p>
            <div style={{ fontSize: '0.875rem' }}>
              <div>Economia Total: <strong style={{ color: '#16a34a' }}>
                R$ {licitacoes.reduce((acc, lic) => acc + (lic.economia_total || 0), 0).toLocaleString('pt-BR')}
              </strong></div>
              <div>Margem Média: <strong>12.5%</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ NOVO: Modal Universal (Licitação + Visualizar)
const Modal = ({ type, data, searchMedicamentos, onClose, onSave, api }) => {
  const [activeTab, setActiveTab] = useState('dados-gerais');
  const [formData, setFormData] = useState(data || {});
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Carregar dados da licitação se for visualização
  useEffect(() => {
    if (type === 'visualizar' && data?.id) {
      setLoading(true);
      api(`/licitacoes/${data.id}`)
        .then(response => {
          if (response) {
            setFormData(response);
            setMedicamentos(response.medicamentos || []);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [type, data, api]);

  if (type === 'visualizar') {
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Eye size={24} color="#2563eb" />
              Visualizar Licitação: {formData.numero}
            </h3>
            <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <RefreshCw size={32} style={{ animation: 'spin 1s linear infinite', color: '#2563eb', margin: '0 auto 1rem' }} />
              <p>Carregando dados da licitação...</p>
            </div>
          ) : (
            <div>
              {/* Dados Gerais */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                  📋 Dados da Licitação
                </h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <strong>Número:</strong> {formData.numero}
                  </div>
                  <div>
                    <strong>Órgão:</strong> {formData.orgao}
                  </div>
                  <div>
                    <strong>Data de Publicação:</strong> {formData.data_publicacao ? new Date(formData.data_publicacao).toLocaleDateString('pt-BR') : 'N/A'}
                  </div>
                  <div>
                    <strong>Data de Vencimento:</strong> {formData.data_vencimento ? new Date(formData.data_vencimento).toLocaleDateString('pt-BR') : 'N/A'}
                  </div>
                  <div>
                    <strong>Valor Estimado:</strong> R$ {(formData.valor || 0).toLocaleString('pt-BR')}
                  </div>
                  <div>
                    <strong>Vigência:</strong> {formData.vigencia_contratual || 'N/A'}
                  </div>
                </div>

                {formData.observacoes && (
                  <div>
                    <strong>Observações:</strong>
                    <p style={{ margin: '0.5rem 0', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                      {formData.observacoes}
                    </p>
                  </div>
                )}
              </div>

              {/* Medicamentos */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                  💊 Medicamentos ({medicamentos.length})
                </h4>
                
                {medicamentos.length === 0 ? (
                  <p style={{ color: '#6b7280', fontStyle: 'italic' }}>Nenhum medicamento encontrado para esta licitação.</p>
                ) : (
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                    <table style={styles.table}>
                      <thead>
                        <tr>
                          <th style={styles.th}>Medicamento</th>
                          <th style={styles.th}>PMVG</th>
                          <th style={styles.th}>Preço Fábrica</th>
                          <th style={styles.th}>Preço Ofertado</th>
                          <th style={styles.th}>Quantidade</th>
                          <th style={styles.th}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medicamentos.map(med => {
                          const precoFabrica = med.preco_fabrica_editavel || med.preco_fabrica || 0;
                          const precoOfertado = med.preco_ofertado || 0;
                          const isRisco = precoFabrica > precoOfertado;
                          const isAcimaPMVG = precoOfertado > med.pmvg;
                          
                          return (
                            <tr key={med.id}>
                              <td style={styles.td}>
                                <div>
                                  <div style={{ fontWeight: '500', color: '#1f2937' }}>{med.nome}</div>
                                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{med.laboratorio}</div>
                                </div>
                              </td>
                              <td style={styles.td}>R$ {med.pmvg.toFixed(2)}</td>
                              <td style={styles.td}>R$ {precoFabrica.toFixed(2)}</td>
                              <td style={styles.td}>R$ {precoOfertado.toFixed(2)}</td>
                              <td style={styles.td}>{med.quantidade || 1}</td>
                              <td style={styles.td}>
                                <span style={{ 
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '4px', 
                                  fontSize: '0.75rem',
                                  backgroundColor: isAcimaPMVG ? '#fee2e2' : isRisco ? '#fef3c7' : '#dcfce7',
                                  color: isAcimaPMVG ? '#dc2626' : isRisco ? '#d97706' : '#16a34a'
                                }}>
                                  {isAcimaPMVG ? 'Acima PMVG' : isRisco ? 'Risco Contratual' : 'Conforme'}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Análise de Conformidade */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                  📊 Análise de Conformidade
                </h4>
                
                <div style={styles.priceComparison}>
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Total de Medicamentos</div>
                    <div style={{ ...styles.priceValue, color: '#2563eb' }}>
                      {medicamentos.length}
                    </div>
                  </div>
                  
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Conformes PMVG</div>
                    <div style={{ ...styles.priceValue, color: '#16a34a' }}>
                      {medicamentos.filter(m => (m.preco_ofertado || 0) <= m.pmvg).length}
                    </div>
                  </div>
                  
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Com Riscos</div>
                    <div style={{ ...styles.priceValue, color: '#dc2626' }}>
                      {medicamentos.filter(m => {
                        const precoFabrica = m.preco_fabrica_editavel || m.preco_fabrica || 0;
                        return precoFabrica > (m.preco_ofertado || 0) || (m.preco_ofertado || 0) > m.pmvg;
                      }).length}
                    </div>
                  </div>
                </div>

                {/* Status Geral */}
                <div style={{ marginTop: '1rem' }}>
                  {medicamentos.some(m => (m.preco_ofertado || 0) > m.pmvg) ? (
                    <div style={{ ...styles.alert, ...styles.alertError, margin: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <XCircle size={16} />
                        <strong>🚨 RISCO DE MULTA DETECTADO</strong>
                      </div>
                      <p style={{ margin: '0.5rem 0 0 0' }}>
                        Esta licitação contém medicamentos com preços acima da PMVG. Ação urgente necessária.
                      </p>
                    </div>
                  ) : medicamentos.some(m => {
                    const precoFabrica = m.preco_fabrica_editavel || m.preco_fabrica || 0;
                    return precoFabrica > (m.preco_ofertado || 0);
                  }) ? (
                    <div style={{ ...styles.alert, ...styles.alertWarning, margin: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertTriangle size={16} />
                        <strong>⚠️ RISCO CONTRATUAL DETECTADO</strong>
                      </div>
                      <p style={{ margin: '0.5rem 0 0 0' }}>
                        Alguns medicamentos têm preço de fábrica superior ao ofertado.
                      </p>
                    </div>
                  ) : (
                    <div style={{ ...styles.alert, ...styles.alertSuccess, margin: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={16} />
                        <strong>✅ LICITAÇÃO EM CONFORMIDADE</strong>
                      </div>
                      <p style={{ margin: '0.5rem 0 0 0' }}>
                        Todos os medicamentos estão dentro dos parâmetros da PMVG.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Botão de Fechar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Modal de Licitação (criar/editar) - versão simplificada
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>
            {data ? 'Editar Licitação' : 'Nova Licitação'}
          </h3>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          <div style={styles.form}>
            <div style={styles.formGroupRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Número da Licitação</label>
                <input
                  type="text"
                  value={formData.numero || ''}
                  onChange={(e) => setFormData({...formData, numero: e.target.value})}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Órgão</label>
                <input
                  type="text"
                  value={formData.orgao || ''}
                  onChange={(e) => setFormData({...formData, orgao: e.target.value})}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formGroupRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Data de Vencimento</label>
                <input
                  type="date"
                  value={formData.data_vencimento || ''}
                  onChange={(e) => setFormData({...formData, data_vencimento: e.target.value})}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Valor Estimado</label>
                <input
                  type="number"
                  value={formData.valor || ''}
                  onChange={(e) => setFormData({...formData, valor: parseFloat(e.target.value)})}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button type="button" onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>
                Cancelar
              </button>
              <button type="submit" style={{ ...styles.button, ...styles.buttonPrimary }}>
                <Save size={16} />
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Modal de Configuração de Email
const EmailConfigModal = ({ emailConfig, setEmailConfig, onSave, onClose }) => (
  <div style={styles.modal}>
    <div style={styles.modalContent}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={24} color="#2563eb" />
          Configurações de Email
        </h3>
        <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <X size={24} />
        </button>
      </div>

      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email para Notificações</label>
          <input
            type="email"
            value={emailConfig.email}
            onChange={(e) => setEmailConfig({...emailConfig, email: e.target.value})}
            style={styles.input}
            placeholder="seu.email@empresa.com"
          />
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginTop: '1rem' }}>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
            Tipos de Notificação
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={emailConfig.notificacoesMensais}
                onChange={(e) => setEmailConfig({...emailConfig, notificacoesMensais: e.target.checked})}
                style={{ width: '18px', height: '18px' }}
              />
              <div>
                <div style={{ fontWeight: '500' }}>📅 Lembretes Mensais (Dia 28)</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Atualização da base PMVG e revisão de preços de fábrica
                </div>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={emailConfig.alertasCriticos}
                onChange={(e) => setEmailConfig({...emailConfig, alertasCriticos: e.target.checked})}
                style={{ width: '18px', height: '18px' }}
              />
              <div>
                <div style={{ fontWeight: '500' }}>🚨 Alertas Críticos</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Riscos de multa, não conformidade PMVG e problemas contratuais
                </div>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={emailConfig.relatoriosSemanais}
                onChange={(e) => setEmailConfig({...emailConfig, relatoriosSemanais: e.target.checked})}
                style={{ width: '18px', height: '18px' }}
              />
              <div>
                <div style={{ fontWeight: '500' }}>📊 Relatórios Semanais</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Resumo semanal de atividades e status das licitações
                </div>
              </div>
            </label>
          </div>
        </div>

        <div style={{ ...styles.alert, ...styles.alertInfo, marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bell size={16} />
            <strong>Sistema de Notificações Automáticas</strong>
          </div>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
            As notificações são simuladas nesta versão demo. Para implementar envio real de emails, 
            seria necessário integrar com serviços como SendGrid, AWS SES ou similar.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <button onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>
            Cancelar
          </button>
          <button onClick={onSave} style={{ ...styles.button, ...styles.buttonPrimary }}>
            <Save size={16} />
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Componente de Estatística
const StatCard = ({ title, value, icon: Icon, color, subtitle }) => {
  const colorStyles = {
    blue: styles.statIconBlue,
    green: styles.statIconGreen,
    red: styles.statIconRed,
    yellow: styles.statIconYellow
  };

  return (
    <div style={styles.statCard}>
      <div style={{ ...styles.statIcon, ...colorStyles[color] }}>
        <Icon size={24} />
      </div>
      <div style={styles.statText}>
        <p style={styles.statTitle}>{title}</p>
        <p style={styles.statValue}>{typeof value === 'number' ? value.toLocaleString() : value}</p>
        {subtitle && (
          <p style={styles.statSubtitle}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default App;
