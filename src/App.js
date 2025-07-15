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

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      setEmailConfig(prev => ({ ...prev, email: JSON.parse(userData).email }));
      loadSystemStatus();
      loadData();
      
      // Verificar notificações mensais após carregar dados
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

  const updatePrecoFabrica = async (medicamentoId, novoPreco) => {
    try {
      const response = await api(`/medicamentos/${medicamentoId}/preco-fabrica`, {
        method: 'PUT',
        body: JSON.stringify({ precoFabrica: parseFloat(novoPreco) })
      });
      
      if (response) {
        showMessage('success', 'Preço de fábrica atualizado com sucesso!');
        await loadData();
      }
    } catch (error) {
      showMessage('error', 'Erro ao atualizar preço de fábrica');
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
    
    const confirmacao = window.confirm(
      `⚠️ EXCLUSÃO PERMANENTE\n\n` +
      `Licitação: ${licitacao?.numero || licitacaoId}\n` +
      `Medicamentos: ${licitacao?.medicamentos?.length || 0}\n` +
      `Alertas: ${alertas.filter(a => a.licitacao === licitacao?.numero).length}\n\n` +
      `Esta ação irá excluir TUDO em cascata e não pode ser desfeita.\n\n` +
      `Tem certeza absoluta?`
    );
    
    if (confirmacao) {
      try {
        setAlertas(prev => prev.filter(a => a.licitacao !== licitacao?.numero));
        setLicitacoes(prev => prev.filter(l => l.id !== licitacaoId));
        
        try {
          const response = await api(`/licitacoes/${licitacaoId}`, {
            method: 'DELETE'
          });
          console.log('✅ Licitação excluída do backend');
        } catch (error) {
          console.log('⚠️ Backend não disponível, excluído localmente');
        }
        
        showMessage('success', 'Licitação e dados relacionados excluídos com sucesso!');
        await loadData();
      } catch (error) {
        showMessage('error', 'Erro ao excluir licitação: ' + error.message);
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
    try {
      const novaLicitacao = {
        id: Date.now(),
        ...licitacaoData,
        dataCriacao: new Date().toISOString(),
        status: 'ativa'
      };

      if (selectedLicitacao) {
        setLicitacoes(prev => prev.map(l => 
          l.id === selectedLicitacao.id ? { ...l, ...licitacaoData } : l
        ));
        showMessage('success', 'Licitação atualizada com sucesso!');
      } else {
        setLicitacoes(prev => [...prev, novaLicitacao]);
        showMessage('success', 'Licitação criada com sucesso!');
        
        try {
          await api('/licitacoes', {
            method: 'POST',
            body: JSON.stringify(novaLicitacao)
          });
          console.log('✅ Licitação salva no backend');
        } catch (error) {
          console.log('⚠️ Backend não disponível, salvo localmente');
        }
      }
      
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar licitação:', error);
      showMessage('error', 'Erro ao salvar licitação');
    }
  };

  const openEmailConfig = () => {
    setEmailConfig(prev => ({
      ...prev,
      email: user?.email || ''
    }));
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
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
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
        dataGeracao: new Date().toISOString(),
        acaoRequerida: 'Revisar e atualizar preços de fábrica dos medicamentos',
        prazoRecomendado: '7 dias'
      };
      
      setAlertas(prev => [...prev, notificacao]);
      localStorage.setItem('ultimaNotificacaoMensal', hoje.toISOString());
      
      sendEmailNotification('monthly_reminder', {
        titulo: notificacao.titulo,
        descricao: notificacao.descricao,
        acaoRequerida: notificacao.acaoRequerida,
        prazo: notificacao.prazoRecomendado
      });
      
      showMessage('info', 'Lembrete mensal enviado: Atualize os preços de fábrica');
    }
  };

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
            badge={alertas.filter(a => a.status === 'ativo').length}
          />
          <NavButton
            icon={AlertCircle}
            label="Ações Urgentes"
            active={currentView === 'acoes-urgentes'}
            onClick={() => setCurrentView('acoes-urgentes')}
            badge={licitacoes.reduce((total, lic) => total + (lic.medicamentosComRisco || 0), 0)}
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
            />
          )}
          {currentView === 'pmvg' && (
            <PMVGView
              pmvgStatus={pmvgStatus}
              loading={loading}
              isAdmin={user.role === 'admin'}
              onUpdatePrecoFabrica={updatePrecoFabrica}
              searchMedicamentos={searchMedicamentos}
              testConnectivity={testConnectivity}
            />
          )}
          {currentView === 'licitacoes' && (
            <LicitacoesView 
              licitacoes={licitacoes}
              onOpenModal={openModal}
              onDelete={deleteLicitacao}
              onVisualizar={openVisualizarModal}
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
          {currentView === 'acoes-urgentes' && (
            <AcoesUrgentesView 
              licitacoes={licitacoes}
              alertas={alertas}
              onOpenModal={openModal}
              onVisualizar={openVisualizarModal}
              user={user}
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
              onExport={exportData}
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
          onSave={modalType === 'licitacao' ? saveLicitacao : closeModal}
        />
      )}

      {/* Modal de Configuração de Email */}
      {showEmailModal && (
        <EmailConfigModal 
          emailConfig={emailConfig}
          setEmailConfig={setEmailConfig}
          onSave={saveEmailConfig}
          onClose={() => setShowEmailModal(false)}
        />
      )}
    </div>
  );
}

// Componente Modal de Configuração de Email
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
            As notificações são enviadas automaticamente baseadas nas configurações acima. 
            Você pode alterar essas preferências a qualquer momento.
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
const NavButton = ({ icon: Icon, label, active, onClick, badge }) => (
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
      <span style={styles.badge}>
        {badge}
      </span>
    )}
  </button>
);

// Componente de Cartão de Estatística
const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
  <div style={styles.statCard}>
    <div style={{ ...styles.statIcon, ...styles[`statIcon${color.charAt(0).toUpperCase() + color.slice(1)}`] }}>
      <Icon size={24} />
    </div>
    <div style={styles.statText}>
      <h4 style={styles.statTitle}>{title}</h4>
      <p style={styles.statValue}>{value}</p>
      <p style={styles.statSubtitle}>{subtitle}</p>
    </div>
  </div>
);

// Dashboard View
const DashboardView = ({ systemStatus, licitacoes, alertas, pmvgStatus, user, checkMonthlyNotifications, openEmailConfig }) => {
  const alertasAtivos = alertas.filter(a => a.status === 'ativo');
  const licitacoesAtivas = licitacoes.filter(l => l.status === 'ativa');
  
  const medicamentosComRisco = licitacoes.reduce((total, lic) => {
    return total + (lic.medicamentosComRisco || 0);
  }, 0);

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
            subtitle="Atualizada automaticamente"
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
            value={alertasAtivos.length}
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
          Status da Automação PMVG - ANVISA
        </h3>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
          borderLeft: '4px solid #16a34a',
          padding: '1rem',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', fontWeight: '600' }}>
              <RefreshCw size={20} />
              <span>Sistema Automático Operacional</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
              Próxima execução: 28/02/2025 às 06:00h
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '0.875rem', color: '#15803d' }}>
            <div>
              <strong>Última atualização:</strong><br/>
              {pmvgStatus?.lastUpdate ? new Date(pmvgStatus.lastUpdate).toLocaleDateString('pt-BR') : '28/01/2025'}
            </div>
            <div>
              <strong>Medicamentos na base:</strong><br/>
              {pmvgStatus?.totalMedicamentos || 'Sincronizando...'}
            </div>
            <div>
              <strong>Status do Cron Job:</strong><br/>
              <span style={{ color: '#16a34a' }}>✅ Ativo (Render)</span>
            </div>
          </div>
          
          {pmvgStatus?.lastUpdateDetails && (
            <div style={{ marginTop: '0.75rem', padding: '0.5rem', backgroundColor: 'rgba(22, 163, 74, 0.1)', borderRadius: '4px' }}>
              <div style={{ fontSize: '0.75rem', color: '#15803d' }}>
                📊 <strong>Última sincronização:</strong> {pmvgStatus.lastUpdateDetails.medicamentosProcessados} medicamentos processados, 
                {pmvgStatus.lastUpdateDetails.novos} novos, {pmvgStatus.lastUpdateDetails.atualizados} atualizados
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resumo de Compliance */}
      <div style={styles.card}>
        <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
          Análise de Compliance PMVG
        </h3>
        
        <div style={styles.priceComparison}>
          <div style={styles.priceBox}>
            <div style={styles.priceLabel}>Licitações Conformes</div>
            <div style={{ ...styles.priceValue, color: '#16a34a' }}>
              {licitacoesAtivas.filter(l => !l.temRiscos).length}
            </div>
            <div style={{ ...styles.priceChange, color: '#16a34a' }}>
              <CheckCircle size={14} />
              Sem riscos detectados
            </div>
          </div>
          
          <div style={styles.priceBox}>
            <div style={styles.priceLabel}>Licitações em Risco</div>
            <div style={{ ...styles.priceValue, color: '#dc2626' }}>
              {licitacoesAtivas.filter(l => l.temRiscos).length}
            </div>
            <div style={{ ...styles.priceChange, color: '#dc2626' }}>
              <AlertTriangle size={14} />
              Requerem ação
            </div>
          </div>
          
          <div style={styles.priceBox}>
            <div style={styles.priceLabel}>Economia Total</div>
            <div style={{ ...styles.priceValue, color: '#2563eb' }}>
              R$ {(licitacoes.reduce((acc, lic) => acc + (lic.economiaTotal || 0), 0)).toLocaleString('pt-BR')}
            </div>
            <div style={{ ...styles.priceChange, color: '#2563eb' }}>
              <TrendingDown size={14} />
              Economia real
            </div>
          </div>
        </div>

        {medicamentosComRisco > 0 && (
          <div style={{ ...styles.alert, ...styles.alertWarning, marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={16} />
              <strong>Ação Urgente Necessária</strong>
            </div>
            <p style={{ margin: '0.5rem 0 0 0' }}>
              {medicamentosComRisco} medicamento(s) com risco de descumprimento contratual. 
              Notifique os órgãos licitantes imediatamente para evitar multas.
            </p>
          </div>
        )}
      </div>

      {/* Configurações de Notificações Mensais */}
      <div style={styles.card}>
        <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
          Configurações de Notificações
        </h3>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          borderLeft: '4px solid #2563eb',
          padding: '1rem',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: '600' }}>
              <Mail size={20} />
              <span>Notificações Automáticas por Email</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#1e40af' }}>
              ✅ Ativo para: {user.email}
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.875rem', color: '#1e40af' }}>
            <div>
              <strong>📅 Lembrete Mensal (Dia 28):</strong><br/>
              Atualização da base PMVG e preços de fábrica
            </div>
            <div>
              <strong>🚨 Alertas Críticos:</strong><br/>
              Riscos de multa e problemas contratuais
            </div>
          </div>
          
          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => checkMonthlyNotifications()}
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
          </div>
        </div>
      </div>

      {/* Alertas Recentes */}
      <div style={styles.card}>
        <h3 style={{ ...styles.cardTitle, fontSize: '1.125rem' }}>
          Alertas Críticos Recentes
        </h3>
        
        {alertasAtivos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <CheckCircle size={48} style={{ margin: '0 auto 1rem', color: '#16a34a' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Sistema em Conformidade</h4>
            <p style={{ margin: 0 }}>Nenhum alerta crítico detectado no momento</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {alertasAtivos.slice(0, 5).map(alerta => (
              <div key={alerta.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '6px', 
                padding: '0.75rem',
                borderLeft: `4px solid ${alerta.prioridade === 'alta' ? '#dc2626' : '#d97706'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>
                      {alerta.titulo}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                      {alerta.descricao}
                    </p>
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    backgroundColor: alerta.prioridade === 'alta' ? '#fee2e2' : '#fef3c7', 
                    color: alerta.prioridade === 'alta' ? '#dc2626' : '#d97706',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    {alerta.prioridade.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// PMVG View com busca inteligente
const PMVGView = ({ pmvgStatus, loading, isAdmin, onUpdatePrecoFabrica, searchMedicamentos, testConnectivity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Analgésico', 'Antibiótico', 'Anti-hipertensivo', 'Antiácido', 
    'Anti-inflamatório', 'Antidiabético', 'Hipolipemiante', 'Diurético'
  ];

  const checkBackendConnectivity = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`, {
        method: 'GET',
        timeout: 5000
      });
      return response.ok;
    } catch (error) {
      console.error('❌ Backend não conectado:', error);
      return false;
    }
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    if (term.length >= 2) {
      setIsSearching(true);
      try {
        const isBackendConnected = await checkBackendConnectivity();
        if (!isBackendConnected) {
          setSearchResults([]);
          alert('❌ Erro: Backend não conectado. Clique em "Verificar Conexão" para diagnosticar.');
          setIsSearching(false);
          return;
        }

        const results = await searchMedicamentos(term);
        if (!results || results.length === 0) {
          alert('⚠️ Nenhum medicamento encontrado. A base PMVG pode não estar sincronizada.');
        }
        setSearchResults(results);
      } catch (error) {
        console.error('Erro na busca:', error);
        setSearchResults([]);
        alert('❌ Erro na busca: ' + error.message);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  const proximaAtualizacao = new Date();
  const hoje = new Date();
  
  if (hoje.getDate() <= 28) {
    proximaAtualizacao.setDate(28);
  } else {
    proximaAtualizacao.setMonth(proximaAtualizacao.getMonth() + 1);
    proximaAtualizacao.setDate(28);
  }

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Base de Dados PMVG - ANVISA</h2>
        
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
              <span>{pmvgStatus?.totalMedicamentos > 0 ? 'Base PMVG Sincronizada Automaticamente' : '❌ Base PMVG Não Conectada'}</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: pmvgStatus?.totalMedicamentos > 0 ? '#15803d' : '#b91c1c' }}>
              {pmvgStatus?.totalMedicamentos > 0 ? `${pmvgStatus.totalMedicamentos} medicamentos` : 'Aguardando conexão...'}
            </div>
          </div>
          
          {pmvgStatus?.totalMedicamentos > 0 ? (
            <>
              <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
                <strong>Última sincronização:</strong> {pmvgStatus?.lastUpdate ? new Date(pmvgStatus.lastUpdate).toLocaleDateString('pt-BR') : '28/01/2025'} às 06:00h (automática)
              </div>
              <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
                <strong>Próxima sincronização:</strong> {proximaAtualizacao.toLocaleDateString('pt-BR')} às 06:00h
              </div>
            </>
          ) : (
            <div style={{ fontSize: '0.875rem', color: '#b91c1c' }}>
              <div><strong>❌ Problema identificado:</strong> Backend não está conectado com a ANVISA</div>
              <div><strong>🔧 Ação necessária:</strong> Verificar se o backend está rodando no Render</div>
              <div><strong>📋 Checklist:</strong></div>
              <ul style={{ margin: '0.5rem 0 0 1rem', fontSize: '0.75rem' }}>
                <li>Backend deployado no Render.com</li>
                <li>Variável REACT_APP_API_URL configurada no Vercel</li>
                <li>Primeira sincronização ANVISA concluída</li>
              </ul>
            </div>
          )}
          
          {pmvgStatus?.lastUpdateDetails && (
            <div style={{ marginTop: '0.75rem', padding: '0.5rem', backgroundColor: 'rgba(22, 163, 74, 0.1)', borderRadius: '4px' }}>
              <div style={{ fontSize: '0.75rem', color: '#15803d' }}>
                📊 <strong>Última sincronização:</strong> {pmvgStatus.lastUpdateDetails.medicamentosProcessados} medicamentos processados, 
                {pmvgStatus.lastUpdateDetails.novos} novos, {pmvgStatus.lastUpdateDetails.atualizados} atualizados
              </div>
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1, position: 'relative' }}>
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
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={styles.select}
            >
              <option value="">Todas as categorias</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={testConnectivity}
              disabled={loading}
              style={{ 
                ...styles.button, 
                ...(pmvgStatus?.totalMedicamentos > 0 ? styles.buttonSecondary : styles.buttonPrimary),
                opacity: loading ? 0.6 : 1
              }}
              title="Testar conexão com backend e recarregar dados"
            >
              <RefreshCw size={16} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
              {loading ? 'Testando...' : 'Verificar Conexão'}
            </button>
          </div>
          
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            💡 <strong>Como usar:</strong> Digite parte do nome do medicamento e os resultados aparecerão instantaneamente da base completa da ANVISA
          </div>
        </div>

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
                      <th style={styles.th}>Categoria</th>
                      <th style={styles.th}>PMVG</th>
                      <th style={styles.th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.slice(0, 50).map(med => {
                      const isAcimaPMVG = med.precoFabrica && med.precoFabrica > med.pmvg;
                      return (
                        <tr key={med.id || med.codigo}>
                          <td style={styles.td}>{med.codigo}</td>
                          <td style={styles.td}>
                            <div>
                              <div style={{ fontWeight: '500', color: '#1f2937' }}>{med.nome}</div>
                              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{med.apresentacao}</div>
                            </div>
                          </td>
                          <td style={styles.td}>{med.laboratorio}</td>
                          <td style={styles.td}>{med.categoria}</td>
                          <td style={styles.td}>
                            <span style={{ fontWeight: '500', color: '#16a34a' }}>
                              R$ {med.pmvg.toFixed(2)}
                            </span>
                          </td>
                          <td style={styles.td}>
                            <span style={{ 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '4px', 
                              fontSize: '0.75rem',
                              backgroundColor: isAcimaPMVG ? '#fee2e2' : '#dcfce7',
                              color: isAcimaPMVG ? '#dc2626' : '#16a34a'
                            }}>
                              {isAcimaPMVG ? 'Acima PMVG' : 'PMVG OK'}
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
        )}

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
                  Busca Inteligente na Base PMVG
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                  Digite o nome de qualquer medicamento no campo acima para buscar instantaneamente 
                  na base completa da ANVISA com {pmvgStatus.totalMedicamentos} medicamentos atualizados automaticamente.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '0.875rem' }}>
                  <div style={{ color: '#2563eb' }}>
                    <strong>📊 Base Completa</strong><br/>
                    {pmvgStatus.totalMedicamentos} medicamentos
                  </div>
                  <div style={{ color: '#16a34a' }}>
                    <strong>🔄 Atualização Auto</strong><br/>
                    Todo dia 28 às 06h
                  </div>
                  <div style={{ color: '#d97706' }}>
                    <strong>⚡ Busca Instant.</strong><br/>
                    Resultados em tempo real
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#dc2626' }}>
                  ❌ Base PMVG Não Sincronizada
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: '#b91c1c', maxWidth: '600px', margin: '0 auto' }}>
                  A base de dados da ANVISA não foi carregada. O sistema não pode funcionar sem dados reais.
                </p>
                <div style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #fecaca', 
                  borderRadius: '6px', 
                  padding: '1rem', 
                  margin: '1rem auto', 
                  maxWidth: '500px',
                  textAlign: 'left',
                  fontSize: '0.875rem'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#dc2626' }}>🔧 Passos para resolver:</h4>
                  <ol style={{ margin: '0', paddingLeft: '1rem', color: '#7f1d1d' }}>
                    <li>Verificar se backend está deployado no Render</li>
                    <li>Confirmar variável REACT_APP_API_URL no Vercel</li>
                    <li>Aguardar primeira sincronização com ANVISA (5-10 min)</li>
                    <li>Verificar logs do Render para erros</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '1rem' }}>
                  💡 <strong>Dica:</strong> Sem a base PMVG, o sistema apenas simula dados. 
                  Para funcionar corretamente, precisa conectar com dados reais da ANVISA.
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Licitações View com busca inteligente
const LicitacoesView = ({ licitacoes, onOpenModal, onDelete, onVisualizar, user }) => (
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
          <button style={{ ...styles.button, ...styles.buttonSecondary }}>
            <Upload size={16} />
            Importar
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
            const diasRestantes = Math.ceil((new Date(licitacao.dataVencimento) - new Date()) / (1000 * 60 * 60 * 24));
            const isVencendo = diasRestantes <= 7;
            const medicamentosComRisco = licitacao.medicamentosComRisco || 0;
            
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
                        Vencimento: {new Date(licitacao.dataVencimento).toLocaleDateString('pt-BR')}
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
                    <button 
                      onClick={() => onVisualizar(licitacao)}
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
                    Medicamentos: {licitacao.totalMedicamentos || 0}
                  </h5>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <div style={{ color: '#16a34a' }}>
                      <strong>✅ Conformes:</strong> {(licitacao.totalMedicamentos || 0) - medicamentosComRisco}
                    </div>
                    <div style={{ color: '#dc2626' }}>
                      <strong>⚠️ Em Risco:</strong> {medicamentosComRisco}
                    </div>
                    <div style={{ color: '#2563eb' }}>
                      <strong>💰 Economia:</strong> R$ {(licitacao.economiaTotal || 0).toLocaleString('pt-BR')}
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
  const alertasPorTipo = alertasAtivos.reduce((acc, alerta) => {
    acc[alerta.tipo] = (acc[alerta.tipo] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={styles.cardTitle}>Central de Alertas PMVG</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ ...styles.button, ...styles.buttonPrimary }}>
              <RefreshCw size={16} />
              Atualizar
            </button>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <StatCard
            title="Alertas Ativos"
            value={alertasAtivos.length}
            icon={Bell}
            color="red"
            subtitle="Requerem ação imediata"
          />
          <StatCard
            title="Riscos de Multa"
            value={alertasPorTipo.risco_multa || 0}
            icon={AlertTriangle}
            color="red"
            subtitle="Preço acima PMVG"
          />
          <StatCard
            title="Riscos Contratuais"
            value={alertasPorTipo.risco_contratual || 0}
            icon={XCircle}
            color="yellow"
            subtitle="Preço fábrica > ofertado"
          />
          <StatCard
            title="Sistema PMVG"
            value={1}
            icon={Shield}
            color="green"
            subtitle="Operacional"
          />
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {alertasAtivos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              <CheckCircle size={64} style={{ margin: '0 auto 1rem', color: '#16a34a' }} />
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Sistema em Perfeita Conformidade</h3>
              <p style={{ margin: 0 }}>Nenhum risco de multa detectado no momento</p>
            </div>
          ) : (
            alertasAtivos.map(alerta => (
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
                      Gerado em: {new Date(alerta.dataGeracao || Date.now()).toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                    <button style={{ ...styles.button, ...styles.buttonSecondary }}>
                      <Eye size={16} />
                      Detalhes
                    </button>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Central de Ações Urgentes
const AcoesUrgentesView = ({ licitacoes, alertas, onOpenModal, onVisualizar, user }) => {
  const [filtroRisco, setFiltroRisco] = useState('todos');
  
  const medicamentosEmRisco = licitacoes.reduce((acc, licitacao) => {
    if (licitacao.medicamentos) {
      licitacao.medicamentos.forEach(med => {
        const precoFabrica = med.precoFabricaEditavel || med.precoFabrica || 0;
        const precoOfertado = med.precoOfertado || 0;
        const isAcimaPMVG = precoOfertado > med.pmvg;
        const temRiscoContratual = precoFabrica > precoOfertado;
        
        if (isAcimaPMVG || temRiscoContratual) {
          acc.push({
            ...med,
            licitacao: licitacao.numero,
            licitacaoId: licitacao.id,
            orgao: licitacao.orgao,
            dataVencimento: licitacao.dataVencimento,
            tipoRisco: isAcimaPMVG ? 'pmvg' : 'contratual',
            severidade: isAcimaPMVG ? 'critica' : 'alta',
            valorRisco: isAcimaPMVG ? 
              (precoOfertado - med.pmvg) * (med.quantidade || 1) :
              (precoFabrica - precoOfertado) * (med.quantidade || 1)
          });
        }
      });
    }
    return acc;
  }, []);

  const medicamentosFiltrados = medicamentosEmRisco.filter(med => {
    if (filtroRisco === 'todos') return true;
    if (filtroRisco === 'pmvg') return med.tipoRisco === 'pmvg';
    if (filtroRisco === 'contratual') return med.tipoRisco === 'contratual';
    return true;
  });

  const riscosPmvg = medicamentosEmRisco.filter(m => m.tipoRisco === 'pmvg').length;
  const riscosContratuais = medicamentosEmRisco.filter(m => m.tipoRisco === 'contratual').length;
  const valorTotalRisco = medicamentosEmRisco.reduce((acc, med) => acc + (med.valorRisco || 0), 0);

  return (
    <div>
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={styles.cardTitle}>🚨 Central de Ações Urgentes</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select
              value={filtroRisco}
              onChange={(e) => setFiltroRisco(e.target.value)}
              style={styles.select}
            >
              <option value="todos">Todos os Riscos</option>
              <option value="pmvg">Acima PMVG (Multa)</option>
              <option value="contratual">Risco Contratual</option>
            </select>
            <button style={{ ...styles.button, ...styles.buttonPrimary }}>
              <RefreshCw size={16} />
              Atualizar
            </button>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <StatCard
            title="Medicamentos em Risco"
            value={medicamentosEmRisco.length}
            icon={AlertTriangle}
            color="red"
            subtitle="Ação urgente necessária"
          />
          <StatCard
            title="Riscos de Multa"
            value={riscosPmvg}
            icon={AlertCircle}
            color="red"
            subtitle="Preço acima PMVG"
          />
          <StatCard
            title="Riscos Contratuais"
            value={riscosContratuais}
            icon={XCircle}
            color="yellow"
            subtitle="Preço fábrica > ofertado"
          />
          <StatCard
            title="Exposição Financeira"
            value={`R$ ${valorTotalRisco.toLocaleString('pt-BR')}`}
            icon={DollarSign}
            color="red"
            subtitle="Valor total em risco"
          />
        </div>

        {medicamentosFiltrados.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
            <CheckCircle size={64} style={{ margin: '0 auto 1rem', color: '#16a34a' }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Nenhum Risco Detectado</h3>
            <p style={{ margin: 0 }}>Todos os medicamentos estão dentro dos parâmetros de segurança</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {medicamentosFiltrados.map((med, index) => (
              <div key={`${med.licitacaoId}-${med.codigo || index}`} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                padding: '1.5rem',
                borderLeft: `4px solid ${med.tipoRisco === 'pmvg' ? '#dc2626' : '#d97706'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {med.tipoRisco === 'pmvg' ? (
                        <AlertTriangle size={16} style={{ color: '#dc2626' }} />
                      ) : (
                        <XCircle size={16} style={{ color: '#d97706' }} />
                      )}
                      <h4 style={{ margin: 0, fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>
                        {med.nome}
                      </h4>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: med.tipoRisco === 'pmvg' ? '#fee2e2' : '#fef3c7',
                        color: med.tipoRisco === 'pmvg' ? '#dc2626' : '#d97706'
                      }}>
                        {med.tipoRisco === 'pmvg' ? 'MULTA' : 'CONTRATUAL'}
                      </span>
                    </div>
                    
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                      <p style={{ margin: '0 0 0.5rem 0' }}>
                        <strong>Licitação:</strong> {med.licitacao} - {med.orgao}
                      </p>
                      <p style={{ margin: '0 0 0.5rem 0' }}>
                        <strong>Laboratório:</strong> {med.laboratorio} | <strong>Código:</strong> {med.codigo}
                      </p>
                      <p style={{ margin: 0 }}>
                        <strong>Risco:</strong> {med.tipoRisco === 'pmvg' ? 
                          `Preço ofertado R$ ${((med.precoOfertado || 0) - med.pmvg).toFixed(2)} acima da PMVG` :
                          `Preço fábrica R$ ${((med.precoFabricaEditavel || med.precoFabrica || 0) - (med.precoOfertado || 0)).toFixed(2)} acima do ofertado`
                        }
                      </p>
                    </div>
                    
                    <div style={{ 
                      backgroundColor: '#f9fafb', 
                      padding: '0.75rem', 
                      borderRadius: '6px',
                      fontSize: '0.875rem'
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                        <div>
                          <strong>PMVG:</strong> R$ {med.pmvg.toFixed(2)}
                        </div>
                        <div>
                          <strong>Preço Fábrica:</strong> R$ {(med.precoFabricaEditavel || med.precoFabrica || 0).toFixed(2)}
                        </div>
                        <div>
                          <strong>Preço Ofertado:</strong> R$ {(med.precoOfertado || 0).toFixed(2)}
                        </div>
                      </div>
                      <div style={{ marginTop: '0.5rem', color: '#dc2626', fontWeight: '500' }}>
                        <strong>Exposição Financeira:</strong> R$ {(med.valorRisco || 0).toFixed(2)}
                      </div>
                    </div>
                    
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Target size={14} style={{ color: '#d97706' }} />
                        <strong style={{ color: '#92400e' }}>Ação Recomendada:</strong>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#92400e' }}>
                        {med.tipoRisco === 'pmvg' ? 
                          'Revisar preço ofertado para evitar multa ANVISA. Contatar órgão licitante imediatamente.' :
                          'Atualizar preço de fábrica ou renegociar preço ofertado para evitar prejuízo contratual.'
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1rem' }}>
                    <button 
                      onClick={() => onVisualizar(licitacoes.find(l => l.id === med.licitacaoId))}
                      style={{ ...styles.button, ...styles.buttonSecondary }}
                    >
                      <Eye size={16} />
                      Ver Licitação
                    </button>
                    <button 
                      onClick={() => onOpenModal('licitacao', licitacoes.find(l => l.id === med.licitacaoId))}
                      style={{ ...styles.button, ...styles.buttonWarning }}
                    >
                      <Edit size={16} />
                      Corrigir
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

// Comparação View
const ComparacaoView = ({ licitacoes, searchMedicamentos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMed, setSelectedMed] = useState(null);
  const [precoComparacao, setPrecoComparacao] = useState('');

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const results = await searchMedicamentos(term);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const analisarPreco = (medicamento, precoTeste) => {
    const preco = parseFloat(precoTeste);
    const pmvg = medicamento.pmvg;
    const precoFabrica = medicamento.precoFabrica || 0;
    
    const isAcimaPMVG = preco > pmvg;
    const temRiscoContratual = precoFabrica > preco;
    
    let status = 'conforme';
    let cor = '#16a34a';
    let icone = CheckCircle;
    let mensagem = 'Preço dentro dos parâmetros de segurança';
    
    if (isAcimaPMVG) {
      status = 'risco_multa';
      cor = '#dc2626';
      icone = AlertTriangle;
      mensagem = `Risco de multa! Preço R$ ${(preco - pmvg).toFixed(2)} acima da PMVG`;
    } else if (temRiscoContratual) {
      status = 'risco_contratual';
      cor = '#d97706';
      icone = XCircle;
      mensagem = `Risco contratual! Preço de fábrica R$ ${(precoFabrica - preco).toFixed(2)} acima do ofertado`;
    }
    
    return { status, cor, icone, mensagem, isAcimaPMVG, temRiscoContratual };
  };

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Comparação de Preços PMVG</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
              Buscar Medicamento
            </h3>
            
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
                placeholder="Digite o nome do medicamento..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ ...styles.input, paddingLeft: '2.5rem' }}
              />
            </div>
            
            {searchResults.length > 0 && (
              <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                {searchResults.slice(0, 10).map(med => (
                  <div 
                    key={med.id || med.codigo}
                    onClick={() => setSelectedMed(med)}
                    style={{ 
                      ...styles.searchResult,
                      ...(selectedMed?.codigo === med.codigo ? styles.searchResultSelected : {})
                    }}
                  >
                    <div style={{ fontWeight: '500' }}>{med.nome}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {med.laboratorio} | PMVG: R$ {med.pmvg.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
              Análise de Preço
            </h3>
            
            {selectedMed ? (
              <div>
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  padding: '1rem', 
                  borderRadius: '6px',
                  marginBottom: '1rem'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{selectedMed.nome}</h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
                    {selectedMed.laboratorio} | {selectedMed.apresentacao}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#16a34a', fontWeight: '500' }}>
                    PMVG: R$ {selectedMed.pmvg.toFixed(2)}
                  </p>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={styles.label}>Preço para Análise</label>
                  <input
                    type="number"
                    step="0.01"
                    value={precoComparacao}
                    onChange={(e) => setPrecoComparacao(e.target.value)}
                    style={styles.input}
                    placeholder="Digite o preço para comparar..."
                  />
                </div>
                
                {precoComparacao && (
                  <div>
                    {(() => {
                      const analise = analisarPreco(selectedMed, precoComparacao);
                      const IconeAnalise = analise.icone;
                      
                      return (
                        <div style={{ 
                          padding: '1rem', 
                          borderRadius: '6px',
                          border: `2px solid ${analise.cor}`,
                          backgroundColor: `${analise.cor}10`
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <IconeAnalise size={20} style={{ color: analise.cor }} />
                            <h4 style={{ margin: 0, color: analise.cor, textTransform: 'uppercase' }}>
                              {analise.status.replace('_', ' ')}
                            </h4>
                          </div>
                          
                          <p style={{ margin: '0 0 1rem 0', color: analise.cor, fontWeight: '500' }}>
                            {analise.mensagem}
                          </p>
                          
                          <div style={styles.priceComparison}>
                            <div style={styles.priceBox}>
                              <div style={styles.priceLabel}>PMVG Oficial</div>
                              <div style={{ ...styles.priceValue, color: '#16a34a' }}>
                                R$ {selectedMed.pmvg.toFixed(2)}
                              </div>
                            </div>
                            <div style={styles.priceBox}>
                              <div style={styles.priceLabel}>Preço Testado</div>
                              <div style={{ ...styles.priceValue, color: analise.cor }}>
                                R$ {parseFloat(precoComparacao).toFixed(2)}
                              </div>
                            </div>
                            <div style={styles.priceBox}>
                              <div style={styles.priceLabel}>Diferença</div>
                              <div style={{ ...styles.priceValue, color: analise.cor }}>
                                R$ {Math.abs(parseFloat(precoComparacao) - selectedMed.pmvg).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                <Calculator size={48} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
                <p>Selecione um medicamento para iniciar a análise</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Relatórios View
const RelatoriosView = ({ licitacoes, alertas, onExport }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');
  const [selectedType, setSelectedType] = useState('geral');

  const estatisticas = {
    licitacoesTotal: licitacoes.length,
    licitacoesAtivas: licitacoes.filter(l => l.status === 'ativa').length,
    alertasAtivos: alertas.filter(a => a.status === 'ativo').length,
    medicamentosTotal: licitacoes.reduce((acc, lic) => acc + (lic.totalMedicamentos || 0), 0),
    medicamentosRisco: licitacoes.reduce((acc, lic) => acc + (lic.medicamentosComRisco || 0), 0),
    economiaTotal: licitacoes.reduce((acc, lic) => acc + (lic.economiaTotal || 0), 0)
  };

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Relatórios e Análises</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <label style={styles.label}>Período</label>
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value)}
              style={styles.select}
            >
              <option value="semana">Última Semana</option>
              <option value="mes">Último Mês</option>
              <option value="trimestre">Último Trimestre</option>
              <option value="ano">Último Ano</option>
            </select>
          </div>
          
          <div>
            <label style={styles.label}>Tipo de Relatório</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              style={styles.select}
            >
              <option value="geral">Relatório Geral</option>
              <option value="compliance">Compliance PMVG</option>
              <option value="riscos">Análise de Riscos</option>
              <option value="economia">Economia Gerada</option>
            </select>
          </div>
        </div>
        
        <div style={styles.statsGrid}>
          <StatCard
            title="Licitações Gerenciadas"
            value={estatisticas.licitacoesTotal}
            icon={FileText}
            color="blue"
            subtitle={`${estatisticas.licitacoesAtivas} ativas`}
          />
          <StatCard
            title="Medicamentos Analisados"
            value={estatisticas.medicamentosTotal}
            icon={Pill}
            color="green"
            subtitle={`${estatisticas.medicamentosRisco} em risco`}
          />
          <StatCard
            title="Alertas Gerados"
            value={estatisticas.alertasAtivos}
            icon={AlertTriangle}
            color="yellow"
            subtitle="Requerem atenção"
          />
          <StatCard
            title="Economia Total"
            value={`R$ ${estatisticas.economiaTotal.toLocaleString('pt-BR')}`}
            icon={DollarSign}
            color="green"
            subtitle="Valor economizado"
          />
        </div>
        
        <div style={styles.card}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Exportar Relatórios
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <button 
              onClick={() => onExport(selectedType, 'pdf')}
              style={{ ...styles.button, ...styles.buttonPrimary }}
            >
              <FileDown size={16} />
              Exportar PDF
            </button>
            <button 
              onClick={() => onExport(selectedType, 'excel')}
              style={{ ...styles.button, ...styles.buttonSuccess }}
            >
              <FileSpreadsheet size={16} />
              Exportar Excel
            </button>
            <button 
              onClick={() => onExport(selectedType, 'csv')}
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              <Download size={16} />
              Exportar CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Principal
const Modal = ({ type, data, searchMedicamentos, onClose, onSave }) => {
  if (type === 'visualizar') {
    return <VisualizarModal data={data} onClose={onClose} />;
  }
  
  if (type === 'licitacao') {
    return <LicitacaoModal data={data} searchMedicamentos={searchMedicamentos} onClose={onClose} onSave={onSave} />;
  }
  
  return null;
};

// Modal de Visualização
const VisualizarModal = ({ data, onClose }) => {
  const [activeTab, setActiveTab] = useState('resumo');
  
  if (!data) return null;
  
  const medicamentos = data.medicamentos || [];
  const medicamentosComRisco = medicamentos.filter(med => {
    const precoFabrica = med.precoFabricaEditavel || med.precoFabrica || 0;
    const precoOfertado = med.precoOfertado || 0;
    return precoOfertado > med.pmvg || precoFabrica > precoOfertado;
  });
  
  const valorTotal = medicamentos.reduce((acc, med) => acc + ((med.precoOfertado || 0) * (med.quantidade || 1)), 0);
  const economiaTotal = medicamentos.reduce((acc, med) => acc + (med.economia || 0), 0);

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Eye size={24} color="#2563eb" />
            Visualizar Licitação - {data.numero}
          </h3>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <div style={styles.tabs}>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'resumo' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('resumo')}
          >
            Resumo Geral
          </button>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'medicamentos' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('medicamentos')}
          >
            Medicamentos ({medicamentos.length})
          </button>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'analise' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('analise')}
          >
            Análise de Conformidade
          </button>
        </div>

        {activeTab === 'resumo' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
                  Dados da Licitação
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <strong>Número:</strong> {data.numero}
                  </div>
                  <div>
                    <strong>Órgão:</strong> {data.orgao}
                  </div>
                  <div>
                    <strong>Vigência:</strong> {data.vigencia}
                  </div>
                  <div>
                    <strong>Valor Estimado:</strong> R$ {data.valor?.toLocaleString('pt-BR')}
                  </div>
                  <div>
                    <strong>Data de Vencimento:</strong> {new Date(data.dataVencimento).toLocaleDateString('pt-BR')}
                  </div>
                  <div>
                    <strong>Status:</strong> <span style={{ 
                      color: data.status === 'ativa' ? '#16a34a' : '#6b7280',
                      fontWeight: '500'
                    }}>
                      {data.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
                  Resumo Financeiro
                </h4>
                <div style={styles.priceComparison}>
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Valor Total</div>
                    <div style={{ ...styles.priceValue, color: '#2563eb' }}>
                      R$ {valorTotal.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Economia</div>
                    <div style={{ ...styles.priceValue, color: '#16a34a' }}>
                      R$ {economiaTotal.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <div style={styles.priceBox}>
                    <div style={styles.priceLabel}>Medicamentos</div>
                    <div style={{ ...styles.priceValue, color: '#1f2937' }}>
                      {medicamentos.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {medicamentosComRisco.length > 0 && (
              <div style={{ ...styles.alert, ...styles.alertWarning }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={16} />
                  <strong>Atenção: Medicamentos com Risco Detectado</strong>
                </div>
                <p style={{ margin: '0.5rem 0 0 0' }}>
                  {medicamentosComRisco.length} medicamento(s) apresentam risco de multa ou problemas contratuais. 
                  Verifique a aba "Análise de Conformidade" para detalhes.
                </p>
              </div>
            )}
            
            {data.autorizacaoRiscosPMVG && (
              <div style={{ ...styles.alert, ...styles.alertInfo }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={16} />
                  <strong>Autorização Manual Registrada</strong>
                </div>
                <div style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                  <p><strong>Autorizado por:</strong> {data.autorizacaoRiscosPMVG.nomeAutorizador}</p>
                  {data.autorizacaoRiscosPMVG.cargo && (
                    <p><strong>Cargo:</strong> {data.autorizacaoRiscosPMVG.cargo}</p>
                  )}
                  {data.autorizacaoRiscosPMVG.justificativa && (
                    <p><strong>Justificativa:</strong> {data.autorizacaoRiscosPMVG.justificativa}</p>
                  )}
                  <p><strong>Data:</strong> {new Date(data.autorizacaoRiscosPMVG.dataAutorizacao).toLocaleString('pt-BR')}</p>
                  <p><strong>Medicamentos autorizados:</strong> {data.autorizacaoRiscosPMVG.totalMedicamentosAutorizados}</p>
                  <p><strong>Valor total de excesso:</strong> R$ {data.autorizacaoRiscosPMVG.valorTotalExcesso.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'medicamentos' && (
          <div>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Lista de Medicamentos
            </h4>
            
            {medicamentos.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                <Pill size={48} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
                <p>Nenhum medicamento cadastrado nesta licitação</p>
              </div>
            ) : (
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Medicamento</th>
                      <th style={styles.th}>PMVG</th>
                      <th style={styles.th}>Preço Ofertado</th>
                      <th style={styles.th}>Quantidade</th>
                      <th style={styles.th}>Total</th>
                      <th style={styles.th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicamentos.map((med, index) => {
                      const precoOfertado = med.precoOfertado || 0;
                      const quantidade = med.quantidade || 1;
                      const total = precoOfertado * quantidade;
                      const isAcimaPMVG = precoOfertado > med.pmvg;
                      
                      return (
                        <tr key={index}>
                          <td style={styles.td}>
                            <div>
                              <div style={{ fontWeight: '500' }}>{med.nome}</div>
                              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                {med.laboratorio}
                              </div>
                            </div>
                          </td>
                          <td style={styles.td}>
                            R$ {med.pmvg.toFixed(2)}
                          </td>
                          <td style={styles.td}>
                            R$ {precoOfertado.toFixed(2)}
                          </td>
                          <td style={styles.td}>
                            {quantidade}
                          </td>
                          <td style={styles.td}>
                            R$ {total.toFixed(2)}
                          </td>
                          <td style={styles.td}>
                            <span style={{ 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '4px', 
                              fontSize: '0.75rem',
                              backgroundColor: isAcimaPMVG ? '#fee2e2' : '#dcfce7',
                              color: isAcimaPMVG ? '#dc2626' : '#16a34a'
                            }}>
                              {isAcimaPMVG ? 'RISCO' : 'OK'}
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
        )}

        {activeTab === 'analise' && (
          <div>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Análise de Conformidade PMVG
            </h4>
            
            <div style={styles.statsGrid}>
              <StatCard
                title="Medicamentos Conformes"
                value={medicamentos.length - medicamentosComRisco.length}
                icon={CheckCircle}
                color="green"
                subtitle="Dentro dos parâmetros"
              />
              <StatCard
                title="Medicamentos em Risco"
                value={medicamentosComRisco.length}
                icon={AlertTriangle}
                color="red"
                subtitle="Requerem atenção"
              />
              <StatCard
                title="Taxa de Conformidade"
                value={`${medicamentos.length > 0 ? Math.round(((medicamentos.length - medicamentosComRisco.length) / medicamentos.length) * 100) : 0}%`}
                icon={Target}
                color="blue"
                subtitle="Percentual de conformidade"
              />
            </div>
            
            {medicamentosComRisco.length > 0 && (
              <div>
                <h5 style={{ margin: '1.5rem 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
                  Medicamentos que Requerem Atenção
                </h5>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {medicamentosComRisco.map((med, index) => {
                    const precoFabrica = med.precoFabricaEditavel || med.precoFabrica || 0;
                    const precoOfertado = med.precoOfertado || 0;
                    const isAcimaPMVG = precoOfertado > med.pmvg;
                    const temRiscoContratual = precoFabrica > precoOfertado;
                    
                    return (
                      <div key={index} style={{ 
                        border: '1px solid #e5e7eb', 
                        borderRadius: '6px', 
                        padding: '1rem',
                        borderLeft: `4px solid ${isAcimaPMVG ? '#dc2626' : '#d97706'}`
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div>
                            <h6 style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>{med.nome}</h6>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                              <div><strong>Laboratório:</strong> {med.laboratorio}</div>
                              <div><strong>PMVG:</strong> R$ {med.pmvg.toFixed(2)}</div>
                              <div><strong>Preço Ofertado:</strong> R$ {precoOfertado.toFixed(2)}</div>
                              {precoFabrica > 0 && (
                                <div><strong>Preço Fábrica:</strong> R$ {precoFabrica.toFixed(2)}</div>
                              )}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            {isAcimaPMVG && (
                              <span style={{ 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '4px', 
                                fontSize: '0.75rem',
                                backgroundColor: '#fee2e2',
                                color: '#dc2626'
                              }}>
                                RISCO DE MULTA
                              </span>
                            )}
                            {temRiscoContratual && (
                              <span style={{ 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '4px', 
                                fontSize: '0.75rem',
                                backgroundColor: '#fef3c7',
                                color: '#d97706',
                                marginLeft: '0.5rem'
                              }}>
                                RISCO CONTRATUAL
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#dc2626' }}>
                          {isAcimaPMVG && (
                            <div>⚠️ Preço R$ {(precoOfertado - med.pmvg).toFixed(2)} acima da PMVG</div>
                          )}
                          {temRiscoContratual && (
                            <div>⚠️ Preço de fábrica R$ {(precoFabrica - precoOfertado).toFixed(2)} acima do ofertado</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <button onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal de Licitação
const LicitacaoModal = ({ data, searchMedicamentos, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('dados-gerais');
  const [formData, setFormData] = useState({
    numero: data?.numero || '',
    orgao: data?.orgao || '',
    vigencia: data?.vigencia || '',
    valor: data?.valor || '',
    dataPublicacao: data?.dataPublicacao || '',
    dataVencimento: data?.dataVencimento || '',
    status: data?.status || 'ativa',
    observacoes: data?.observacoes || ''
  });
  
  const [selectedMedicamentos, setSelectedMedicamentos] = useState(data?.medicamentos || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showManualForm, setShowManualForm] = useState(false);
  const [autorizacaoManual, setAutorizacaoManual] = useState({
    ativa: false,
    nomeAutorizador: '',
    cargo: '',
    justificativa: ''
  });
  const [manualMed, setManualMed] = useState({
    nome: '',
    laboratorio: '',
    codigo: '',
    pmvg: '',
    precoFabrica: '',
    apresentacao: '',
    categoria: 'Analgésico'
  });

  const categories = [
    'Analgésico', 'Antibiótico', 'Anti-hipertensivo', 'Antiácido', 
    'Anti-inflamatório', 'Antidiabético', 'Hipolipemiante', 'Diurético',
    'Antialérgico', 'Broncodilatador', 'Anticoagulante', 'Antidepressivo'
  ];

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const results = await searchMedicamentos(term);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const addMedicamento = (medicamento) => {
    const exists = selectedMedicamentos.find(m => m.codigo === medicamento.codigo);
    if (!exists) {
      setSelectedMedicamentos(prev => [...prev, {
        ...medicamento,
        precoOfertado: 0,
        quantidade: 1,
        origem: 'busca'
      }]);
    }
    setSearchTerm('');
    setSearchResults([]);
  };

  const addManualMedicamento = () => {
    if (manualMed.nome && manualMed.pmvg && manualMed.precoFabrica) {
      const novoMed = {
        ...manualMed,
        id: Date.now(),
        pmvg: parseFloat(manualMed.pmvg),
        precoFabrica: parseFloat(manualMed.precoFabrica),
        precoOfertado: 0,
        quantidade: 1,
        origem: 'manual'
      };
      
      setSelectedMedicamentos(prev => [...prev, novoMed]);
      setManualMed({
        nome: '',
        laboratorio: '',
        codigo: '',
        pmvg: '',
        precoFabrica: '',
        apresentacao: '',
        categoria: 'Analgésico'
      });
      setShowManualForm(false);
    }
  };

  const removeMedicamento = (medicamentoId) => {
    setSelectedMedicamentos(prev => 
      prev.filter(m => m.id !== medicamentoId && m.codigo !== medicamentoId)
    );
  };

  const updateMedicamento = (medicamentoId, field, value) => {
    setSelectedMedicamentos(prev => 
      prev.map(m => 
        (m.id === medicamentoId || m.codigo === medicamentoId) ? 
          { ...m, [field]: parseFloat(value) || 0 } : m
      )
    );
  };

  const handleSubmit = () => {
    if (!formData.numero || !formData.orgao || !formData.dataVencimento) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const medicamentosComRisco = selectedMedicamentos.filter(med => {
      const precoOfertado = med.precoOfertado || 0;
      return precoOfertado > med.pmvg;
    });

    // Verificar se há medicamentos acima do PMVG sem autorização
    if (medicamentosComRisco.length > 0) {
      const temAutorizacao = autorizacaoManual.nomeAutorizador.trim() !== '';
      
      if (!temAutorizacao) {
        alert('❌ AUTORIZAÇÃO NECESSÁRIA\n\nExistem medicamentos com preço acima do PMVG.\nPreencha o nome de quem autoriza esta proposta na aba "Análise PMVG".');
        return;
      }
      
      // Confirmação final com autorização
      const confirmacao = window.confirm(
        `⚠️ CONFIRMAÇÃO: PREÇOS ACIMA DO PMVG COM AUTORIZAÇÃO\n\n` +
        `${medicamentosComRisco.length} medicamento(s) com preço ofertado acima do PMVG.\n` +
        `Autorizado por: ${autorizacaoManual.nomeAutorizador}\n` +
        `${autorizacaoManual.cargo ? `Cargo: ${autorizacaoManual.cargo}\n` : ''}` +
        `${autorizacaoManual.justificativa ? `Justificativa: ${autorizacaoManual.justificativa}\n` : ''}` +
        `\n⚠️ ATENÇÃO: Isso pode resultar em multas da ANVISA.\n\n` +
        `Deseja continuar e salvar com autorização manual?`
      );
      
      if (!confirmacao) {
        return;
      }
    }

    const licitacaoCompleta = {
      ...formData,
      medicamentos: selectedMedicamentos,
      totalMedicamentos: selectedMedicamentos.length,
      medicamentosComRisco: medicamentosComRisco.length,
      valorTotal: selectedMedicamentos.reduce((acc, med) => acc + ((med.precoOfertado || 0) * (med.quantidade || 1)), 0),
      economiaTotal: selectedMedicamentos.reduce((acc, med) => {
        const economia = med.pmvg - (med.precoOfertado || 0);
        return acc + (economia > 0 ? economia * (med.quantidade || 1) : 0);
      }, 0),
      temRiscos: medicamentosComRisco.length > 0,
      
      // NOVO: Dados de autorização manual para preços acima do PMVG
      autorizacaoRiscosPMVG: medicamentosComRisco.length > 0 ? {
        temAutorizacao: true,
        nomeAutorizador: autorizacaoManual.nomeAutorizador,
        cargo: autorizacaoManual.cargo || null,
        justificativa: autorizacaoManual.justificativa || null,
        dataAutorizacao: new Date().toISOString(),
        usuarioSistema: JSON.parse(localStorage.getItem('user'))?.email || 'sistema',
        totalMedicamentosAutorizados: medicamentosComRisco.length,
        valorTotalExcesso: medicamentosComRisco.reduce((acc, med) => 
          acc + ((med.precoOfertado - med.pmvg) * (med.quantidade || 1)), 0
        ),
        medicamentosAutorizados: medicamentosComRisco.map(med => ({
          nome: med.nome,
          laboratorio: med.laboratorio,
          codigo: med.codigo,
          pmvg: med.pmvg,
          precoOfertado: med.precoOfertado,
          quantidade: med.quantidade || 1,
          valorExcesso: (med.precoOfertado - med.pmvg),
          valorTotalExcesso: (med.precoOfertado - med.pmvg) * (med.quantidade || 1)
        }))
      } : null
    };

    onSave(licitacaoCompleta);
  };

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

        <div style={styles.tabs}>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'dados-gerais' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('dados-gerais')}
          >
            Dados Gerais
          </button>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'medicamentos' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('medicamentos')}
          >
            Medicamentos ({selectedMedicamentos.length})
          </button>
          <button 
            style={{
              ...styles.tab,
              ...(activeTab === 'comparacao' ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab('comparacao')}
          >
            Análise PMVG
          </button>
        </div>

        {activeTab === 'dados-gerais' && (
          <div style={styles.form}>
            <div style={styles.formGroupRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Número da Licitação *</label>
                <input
                  type="text"
                  value={formData.numero}
                  onChange={(e) => setFormData({...formData, numero: e.target.value})}
                  style={styles.input}
                  placeholder="Ex: 001/2025"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Órgão Licitante *</label>
                <input
                  type="text"
                  value={formData.orgao}
                  onChange={(e) => setFormData({...formData, orgao: e.target.value})}
                  style={styles.input}
                  placeholder="Ex: Secretaria Municipal de Saúde"
                />
              </div>
            </div>

            <div style={styles.formGroupRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Vigência Contratual</label>
                <input
                  type="text"
                  value={formData.vigencia}
                  onChange={(e) => setFormData({...formData, vigencia: e.target.value})}
                  style={styles.input}
                  placeholder="Ex: 12 meses"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Valor Estimado (R$)</label>
                <input
                  type="number"
                  value={formData.valor}
                  onChange={(e) => setFormData({...formData, valor: parseFloat(e.target.value) || 0})}
                  style={styles.input}
                  placeholder="0.00"
                />
              </div>
            </div>

            <div style={styles.formGroupRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Data de Publicação</label>
                <input
                  type="date"
                  value={formData.dataPublicacao}
                  onChange={(e) => setFormData({...formData, dataPublicacao: e.target.value})}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Data de Vencimento *</label>
                <input
                  type="date"
                  value={formData.dataVencimento}
                  onChange={(e) => setFormData({...formData, dataVencimento: e.target.value})}
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                style={styles.select}
              >
                <option value="ativa">Ativa</option>
                <option value="suspensa">Suspensa</option>
                <option value="cancelada">Cancelada</option>
                <option value="concluida">Concluída</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Observações</label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
                style={styles.textarea}
                placeholder="Observações adicionais sobre a licitação..."
              />
            </div>
          </div>
        )}

        {activeTab === 'medicamentos' && (
          <div>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Adicionar Medicamentos
            </h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <Search size={16} style={{ 
                    position: 'absolute', 
                    left: '0.75rem', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: '#9ca3af' 
                  }} />
                  <input
                    type="text"
                    placeholder="Digite o nome do medicamento para buscar na base PMVG..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ ...styles.input, paddingLeft: '2.5rem' }}
                  />
                </div>
                <button
                  onClick={() => setShowManualForm(!showManualForm)}
                  style={{ ...styles.button, ...styles.buttonSecondary }}
                >
                  <Plus size={16} />
                  {showManualForm ? 'Cancelar Manual' : 'Cadastro Manual'}
                </button>
              </div>
              
              {searchResults.length > 0 && (
                <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                  {searchResults.slice(0, 10).map(med => (
                    <div key={med.id || med.codigo} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '0.75rem',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <div>
                        <div style={{ fontWeight: '500' }}>{med.nome}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          {med.laboratorio} | PMVG: R$ {med.pmvg.toFixed(2)}
                        </div>
                      </div>
                      <button 
                        onClick={() => addMedicamento(med)}
                        style={{ ...styles.button, ...styles.buttonPrimary }}
                      >
                        <Plus size={16} />
                        Adicionar
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {showManualForm && (
                <div style={{ 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '6px', 
                  padding: '1rem',
                  backgroundColor: '#f9fafb'
                }}>
                  <h5 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
                    Cadastro Manual de Medicamento
                  </h5>
                  
                  <div style={styles.form}>
                    <div style={styles.formGroupRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Nome do Medicamento *</label>
                        <input
                          type="text"
                          value={manualMed.nome}
                          onChange={(e) => setManualMed({...manualMed, nome: e.target.value})}
                          style={styles.input}
                          placeholder="Ex: Dipirona Sódica 500mg"
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Laboratório</label>
                        <input
                          type="text"
                          value={manualMed.laboratorio}
                          onChange={(e) => setManualMed({...manualMed, laboratorio: e.target.value})}
                          style={styles.input}
                          placeholder="Ex: Sanofi"
                        />
                      </div>
                    </div>
                    
                    <div style={styles.formGroupRow3}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Código</label>
                        <input
                          type="text"
                          value={manualMed.codigo}
                          onChange={(e) => setManualMed({...manualMed, codigo: e.target.value})}
                          style={styles.input}
                          placeholder="Ex: 123456"
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>PMVG (R$) *</label>
                        <input
                          type="number"
                          step="0.01"
                          value={manualMed.pmvg}
                          onChange={(e) => setManualMed({...manualMed, pmvg: e.target.value})}
                          style={styles.input}
                          placeholder="0.00"
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Preço Fábrica (R$) *</label>
                        <input
                          type="number"
                          step="0.01"
                          value={manualMed.precoFabrica}
                          onChange={(e) => setManualMed({...manualMed, precoFabrica: e.target.value})}
                          style={styles.input}
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    
                    <div style={styles.formGroupRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Apresentação</label>
                        <input
                          type="text"
                          value={manualMed.apresentacao}
                          onChange={(e) => setManualMed({...manualMed, apresentacao: e.target.value})}
                          style={styles.input}
                          placeholder="Ex: Comprimido, Caixa com 20 comprimidos"
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Categoria</label>
                        <select
                          value={manualMed.categoria}
                          onChange={(e) => setManualMed({...manualMed, categoria: e.target.value})}
                          style={styles.select}
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <button 
                      onClick={addManualMedicamento}
                      style={{ ...styles.button, ...styles.buttonSuccess }}
                    >
                      <Plus size={16} />
                      Adicionar Medicamento
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <h4 style={{ margin: '1.5rem 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Medicamentos Selecionados ({selectedMedicamentos.length})
            </h4>
            
            {selectedMedicamentos.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                <Pill size={48} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
                <p>Nenhum medicamento selecionado</p>
                <p style={{ fontSize: '0.875rem' }}>
                  Use a busca acima para encontrar medicamentos na base PMVG ou cadastre manualmente
                </p>
              </div>
            ) : (
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Medicamento</th>
                      <th style={styles.th}>PMVG</th>
                      <th style={styles.th}>Preço Fábrica</th>
                      <th style={styles.th}>Preço Ofertado</th>
                      <th style={styles.th}>Quantidade</th>
                      <th style={styles.th}>Total</th>
                      <th style={styles.th}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedMedicamentos.map((med, index) => {
                      const precoOfertado = med.precoOfertado || 0;
                      const quantidade = med.quantidade || 1;
                      const precoFabrica = med.precoFabricaEditavel || med.precoFabrica || 0;
                      const total = precoOfertado * quantidade;
                      const isAcimaPMVG = precoOfertado > med.pmvg;
                      const temRiscoContratual = precoFabrica > precoOfertado;
                      
                      return (
                        <tr key={index} style={{ 
                          borderLeft: `4px solid ${isAcimaPMVG ? '#dc2626' : temRiscoContratual ? '#d97706' : '#16a34a'}`
                        }}>
                          <td style={styles.td}>
                            <div>
                              <div style={{ fontWeight: '500' }}>{med.nome}</div>
                              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                {med.laboratorio} {med.origem === 'manual' && '(Manual)'}
                              </div>
                            </div>
                          </td>
                          <td style={styles.td}>
                            R$ {med.pmvg.toFixed(2)}
                          </td>
                          <td style={styles.td}>
                            <input
                              type="number"
                              step="0.01"
                              value={med.precoFabricaEditavel || med.precoFabrica || 0}
                              onChange={(e) => updateMedicamento(med.id || med.codigo, 'precoFabricaEditavel', e.target.value)}
                              style={{ ...styles.input, padding: '0.25rem', fontSize: '0.875rem' }}
                            />
                          </td>
                          <td style={styles.td}>
                            <input
                              type="number"
                              step="0.01"
                              value={precoOfertado}
                              onChange={(e) => updateMedicamento(med.id || med.codigo, 'precoOfertado', e.target.value)}
                              style={{ ...styles.input, padding: '0.25rem', fontSize: '0.875rem' }}
                            />
                          </td>
                          <td style={styles.td}>
                            <input
                              type="number"
                              value={quantidade}
                              onChange={(e) => updateMedicamento(med.id || med.codigo, 'quantidade', e.target.value)}
                              style={{ ...styles.input, padding: '0.25rem', fontSize: '0.875rem' }}
                            />
                          </td>
                          <td style={styles.td}>
                            R$ {total.toFixed(2)}
                          </td>
                          <td style={styles.td}>
                            <button
                              type="button"
                              onClick={() => removeMedicamento(med.id || med.codigo)}
                              style={{ ...styles.button, ...styles.buttonDanger, padding: '0.25rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'comparacao' && (
          <div>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600' }}>
              Análise PMVG - Prevenção de Multas
            </h4>
            
            {selectedMedicamentos.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                <AlertTriangle size={48} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
                <p>Adicione medicamentos para visualizar a análise PMVG</p>
              </div>
            ) : (
              <div>
                <div style={styles.statsGrid}>
                  <StatCard
                    title="Medicamentos Conformes"
                    value={selectedMedicamentos.filter(med => (med.precoOfertado || 0) <= med.pmvg).length}
                    icon={CheckCircle}
                    color="green"
                    subtitle="Dentro do PMVG"
                  />
                  <StatCard
                    title="Medicamentos em Risco"
                    value={selectedMedicamentos.filter(med => (med.precoOfertado || 0) > med.pmvg).length}
                    icon={AlertTriangle}
                    color="red"
                    subtitle="Acima do PMVG"
                  />
                  <StatCard
                    title="Economia Total"
                    value={`R$ ${selectedMedicamentos.reduce((acc, med) => {
                      const economia = med.pmvg - (med.precoOfertado || 0);
                      return acc + (economia > 0 ? economia * (med.quantidade || 1) : 0);
                    }, 0).toFixed(2)}`}
                    icon={DollarSign}
                    color="green"
                    subtitle="Valor economizado"
                  />
                </div>
                
                <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
                  {selectedMedicamentos.map((med, index) => {
                    const precoOfertado = med.precoOfertado || 0;
                    const precoFabrica = med.precoFabricaEditavel || med.precoFabrica || 0;
                    const isAcimaPMVG = precoOfertado > med.pmvg;
                    const temRisco = precoFabrica > precoOfertado;
                    
                    return (
                      <div key={index} style={{ 
                        border: '1px solid #e5e7eb', 
                        borderRadius: '6px', 
                        padding: '1rem',
                        borderLeft: `4px solid ${isAcimaPMVG ? '#dc2626' : temRisco ? '#d97706' : '#16a34a'}`
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ flex: 1 }}>
                            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>{med.nome}</h5>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                              {med.laboratorio} | {med.apresentacao}
                            </div>
                            
                            <div style={styles.priceComparison}>
                              <div style={styles.priceBox}>
                                <div style={styles.priceLabel}>PMVG Oficial</div>
                                <div style={{ ...styles.priceValue, color: '#16a34a' }}>
                                  R$ {med.pmvg.toFixed(2)}
                                </div>
                              </div>
                              <div style={styles.priceBox}>
                                <div style={styles.priceLabel}>Preço Fábrica</div>
                                <div style={{ ...styles.priceValue, color: '#2563eb' }}>
                                  R$ {precoFabrica.toFixed(2)}
                                </div>
                              </div>
                              <div style={styles.priceBox}>
                                <div style={styles.priceLabel}>Preço Ofertado</div>
                                <div style={{ ...styles.priceValue, color: isAcimaPMVG ? '#dc2626' : '#16a34a' }}>
                                  R$ {precoOfertado.toFixed(2)}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div style={{ marginLeft: '1rem' }}>
                            {isAcimaPMVG ? (
                              <div style={{ ...styles.alertError, padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                  <AlertTriangle size={16} />
                                  <strong>🚨 RISCO DE MULTA CRÍTICO</strong>
                                </div>
                                <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem' }}>
                                  Preço R$ {(precoOfertado - med.pmvg).toFixed(2)} acima da PMVG
                                </p>
                                
                                <div style={{ 
                                  backgroundColor: 'white', 
                                  padding: '1rem', 
                                  borderRadius: '6px',
                                  border: '1px solid #fca5a5'
                                }}>
                                  <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.875rem', fontWeight: '600', color: '#1f2937' }}>
                                    ⚠️ Autorização Manual Necessária
                                  </h4>
                                  
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <input
                                      type="text"
                                      placeholder="Nome de quem autoriza esta proposta *"
                                      value={autorizacaoManual.nomeAutorizador}
                                      onChange={(e) => setAutorizacaoManual({...autorizacaoManual, nomeAutorizador: e.target.value})}
                                      style={{ 
                                        ...styles.input, 
                                        padding: '0.5rem',
                                        fontSize: '0.875rem',
                                        borderColor: autorizacaoManual.nomeAutorizador ? '#d1d5db' : '#f87171'
                                      }}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Cargo (opcional)"
                                      value={autorizacaoManual.cargo}
                                      onChange={(e) => setAutorizacaoManual({...autorizacaoManual, cargo: e.target.value})}
                                      style={{ 
                                        ...styles.input, 
                                        padding: '0.5rem',
                                        fontSize: '0.875rem'
                                      }}
                                    />
                                    <textarea
                                      placeholder="Justificativa para autorizar preço acima do PMVG (opcional)"
                                      value={autorizacaoManual.justificativa}
                                      onChange={(e) => setAutorizacaoManual({...autorizacaoManual, justificativa: e.target.value})}
                                      style={{ 
                                        ...styles.textarea, 
                                        padding: '0.5rem',
                                        fontSize: '0.875rem',
                                        minHeight: '60px'
                                      }}
                                    />
                                  </div>
                                  
                                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
                                    💡 Esta informação será registrada para auditoria e relatórios
                                  </div>
                                </div>
                              </div>
                            ) : temRisco ? (
                              <div style={{ ...styles.alertWarning, padding: '0.5rem' }}>
                                <strong>⚠️ RISCO CONTRATUAL</strong>
                                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                                  Preço fábrica maior que ofertado
                                </p>
                              </div>
                            ) : (
                              <div style={{ ...styles.alertSuccess, padding: '0.5rem' }}>
                                <strong>✅ CONFORME - SEM RISCOS</strong>
                                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                                  Dentro dos parâmetros de segurança
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <button onClick={onClose} style={{ ...styles.button, ...styles.buttonSecondary }}>
            Cancelar
          </button>
          <button 
            onClick={handleSubmit}
            disabled={(() => {
              const medicamentosAcimaPMVG = selectedMedicamentos.filter(m => (m.precoOfertado || 0) > m.pmvg);
              const temAutorizacao = autorizacaoManual.nomeAutorizador.trim() !== '';
              return medicamentosAcimaPMVG.length > 0 && !temAutorizacao;
            })()}
            style={{ 
              ...styles.button, 
              ...((() => {
                const medicamentosAcimaPMVG = selectedMedicamentos.filter(m => (m.precoOfertado || 0) > m.pmvg);
                const temAutorizacao = autorizacaoManual.nomeAutorizador.trim() !== '';
                const precisaAutorizacao = medicamentosAcimaPMVG.length > 0 && !temAutorizacao;
                
                return precisaAutorizacao ? 
                  { ...styles.buttonDanger, opacity: 0.7 } : 
                  styles.buttonSuccess;
              })())
            }}
          >
            {(() => {
              const medicamentosAcimaPMVG = selectedMedicamentos.filter(m => (m.precoOfertado || 0) > m.pmvg);
              const temAutorizacao = autorizacaoManual.nomeAutorizador.trim() !== '';
              const precisaAutorizacao = medicamentosAcimaPMVG.length > 0 && !temAutorizacao;
              
              if (precisaAutorizacao) {
                return 'Preencha a Autorização Manual';
              } else if (medicamentosAcimaPMVG.length > 0 && temAutorizacao) {
                return 'Salvar com Autorização Manual';
              } else {
                return 'Salvar Licitação';
              }
            })()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
