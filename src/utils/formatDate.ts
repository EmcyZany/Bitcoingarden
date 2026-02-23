export function formatDeadline(deadline: string): string {
  if (!deadline) return '';
  return deadline;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
      return 'bg-emerald-500';
    case 'expiring':
      return 'bg-amber-500';
    case 'upcoming':
      return 'bg-blue-500';
    default:
      return 'bg-slate-500';
  }
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    airdrop: 'Airdrop',
    faucet: 'Faucet',
    staking: 'Staking',
    task: 'Task'
  };
  return labels[type] || type;
}
