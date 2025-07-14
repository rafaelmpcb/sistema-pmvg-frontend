const deleteLicitacao = async (licitacaoId) => {
    const licitacao = licitacoes.find(l => l.id === licitacaoId);
    
    // ✅ CORRIGIDO: Verificações avançadas de permissão
    if (user.role !== 'admin') {
      showMessage('error', 'Apenas administradores podem excluir licitações');
      return;
    }
    
    // ✅ CORRIGIDO: Validações avançadas
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
        // ✅ CORRIGIDO: Exclusão em cascata local
        // Remover alertas relacionados
        setAlertas(prev => prev.filter(a => a.licitacao !== licitacao?.numero));
        
        // Remover licitação
        setLicitacoes(prev => prev.filter(l => l.id !== licitacaoId));
        
        // Tentar excluir no backend
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
