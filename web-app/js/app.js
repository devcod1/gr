// ============================================
// CORE APPLICATION JAVASCRIPT
// ============================================

// Mock Data Storage
const AppData = {
  currentUser: null,
  reports: [],
  users: [],
  collections: [],

  // Initialize with mock data
  init() {
    this.loadMockData();
  },

  loadMockData() {
    // Mock users
    this.users = [
      { id: 1, nom: 'Admin', prenom: 'User', email: 'admin@waste.dz', role: 'ADMIN', telephone: '0550123456', isVerified: true },
      { id: 2, nom: 'Benali', prenom: 'Ahmed', email: 'ahmed@gmail.com', role: 'CITOYEN', telephone: '0551234567', pointsVerts: 250, isVerified: true },
      { id: 3, nom: 'Meziane', prenom: 'Fatima', email: 'fatima@gmail.com', role: 'AGENT', telephone: '0552345678', matricule: 'AG001', secteur: 'Centre-ville', isVerified: true },
      { id: 4, nom: 'GreenTech', prenom: 'SARL', email: 'contact@greentech.dz', role: 'INVESTISSEUR', telephone: '0553456789', entreprise: 'GreenTech Recycling', solde: 15000, isVerified: true }
    ];

    // Mock waste reports
    this.reports = [
      {
        id: 1,
        titre: 'Dépôt sauvage rue Didouche',
        description: 'Plusieurs sacs de déchets ménagers abandonnés',
        type: 'Déchet ménager',
        latitude: 36.7525,
        longitude: 3.0420,
        status: 'EN_ATTENTE',
        priority: 2,
        volumeEstime: 1.2,
        photo: null,
        reporter: this.users[1],
        createdAt: new Date('2025-12-01T09:30:00')
      },
      {
        id: 2,
        titre: 'Déchets de construction',
        description: 'Gravats et matériaux de construction',
        type: 'Déchets de construction',
        latitude: 36.7580,
        longitude: 3.0500,
        status: 'EN_COURS',
        priority: 1,
        volumeEstime: 5.5,
        photo: null,
        reporter: this.users[1],
        createdAt: new Date('2025-11-30T14:20:00')
      },
      {
        id: 3,
        titre: 'Déchets verts parc',
        description: 'Branches et feuilles mortes',
        type: 'Déchets verts',
        latitude: 36.7600,
        longitude: 3.0450,
        status: 'TERMINE',
        priority: 3,
        volumeEstime: 2.0,
        photo: null,
        reporter: this.users[1],
        createdAt: new Date('2025-11-29T10:00:00')
      }
    ];

    // Set current user from localStorage or default
    const savedUser = localStorage.getItem('currentUser');
    this.currentUser = savedUser ? JSON.parse(savedUser) : this.users[0];
  },

  // Authentication
  login(email, password) {
    // Mock authentication - in real app, would call API
    const user = this.users.find(u => u.email === email);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  },

  // Update current user profile
  updateCurrentUser(updatedData) {
    if (this.currentUser) {
      Object.assign(this.currentUser, updatedData);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  },

  // Reports
  getReports(filters = {}) {
    let filtered = [...this.reports];

    if (filters.status) {
      filtered = filtered.filter(r => r.status === filters.status);
    }

    if (filters.type) {
      filtered = filtered.filter(r => r.type === filters.type);
    }

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(r =>
        r.titre.toLowerCase().includes(search) ||
        r.description.toLowerCase().includes(search)
      );
    }

    return filtered;
  },

  getReportById(id) {
    return this.reports.find(r => r.id === id);
  },

  updateReportStatus(id, status) {
    const report = this.getReportById(id);
    if (report) {
      report.status = status;
      return report;
    }
    return null;
  },

  // Stats
  getStats() {
    const today = new Date();
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    return {
      totalReports: this.reports.length,
      pendingReports: this.reports.filter(r => r.status === 'EN_ATTENTE').length,
      inProgressReports: this.reports.filter(r => r.status === 'EN_COURS').length,
      completedReports: this.reports.filter(r => r.status === 'TERMINE').length,
      totalUsers: this.users.length,
      citoyens: this.users.filter(u => u.role === 'CITOYEN').length,
      agents: this.users.filter(u => u.role === 'AGENT').length,
      investisseurs: this.users.filter(u => u.role === 'INVESTISSEUR').length,
      thisMonthReports: this.reports.filter(r => new Date(r.createdAt) >= thisMonth).length,
      totalVolume: this.reports.reduce((sum, r) => sum + r.volumeEstime, 0)
    };
  }
};

// Initialize data on load
AppData.init();

// Utility Functions
const Utils = {
  // Format date
  formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Format number
  formatNumber(num) {
    return new Intl.NumberFormat('fr-FR').format(num);
  },

  // Get status badge class
  getStatusBadgeClass(status) {
    const classes = {
      'EN_ATTENTE': 'badge-warning',
      'EN_COURS': 'badge-info',
      'TERMINE': 'badge-success'
    };
    return classes[status] || 'badge-primary';
  },

  // Get status label
  getStatusLabel(status) {
    const labels = {
      'EN_ATTENTE': 'En attente',
      'EN_COURS': 'En cours',
      'TERMINE': 'Terminé'
    };
    return labels[status] || status;
  },

  // Get priority color
  getPriorityColor(priority) {
    if (priority === 1) return 'var(--danger-red)';
    if (priority === 2) return 'var(--warning-yellow)';
    return 'var(--text-gray)';
  },

  // Show notification
  showNotification(title, message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';

    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';

    notification.innerHTML = `
      <div class="notification-icon">${icon}</div>
      <div class="notification-content">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  },

  // Navigate to page
  navigate(url) {
    window.location.href = url;
  },

  // Check authentication
  requireAuth(role = null) {
    if (!AppData.currentUser) {
      Utils.navigate('login.html');
      return false;
    }

    if (role && AppData.currentUser.role !== role) {
      Utils.showNotification('Accès refusé', 'Vous n\'avez pas les permissions nécessaires', 'error');
      return false;
    }

    return true;
  },

  // Update user info display
  updateUserDisplay() {
    const userNameEl = document.getElementById('user-name');
    const userRoleEl = document.getElementById('user-role');
    const userAvatarEl = document.getElementById('user-avatar');

    if (AppData.currentUser) {
      if (userNameEl) userNameEl.textContent = `${AppData.currentUser.prenom} ${AppData.currentUser.nom}`;
      if (userRoleEl) userRoleEl.textContent = AppData.currentUser.role;
      if (userAvatarEl) userAvatarEl.textContent = AppData.currentUser.prenom.charAt(0);
    }
  }
};

// Modal Manager
const Modal = {
  current: null,

  open(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      this.current = modal;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  close(modalId = null) {
    const modal = modalId ? document.getElementById(modalId) : this.current;
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      this.current = null;
    }
  },

  init() {
    // Close modal on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        this.close();
      }
    });

    // Close modal on close button click
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  Modal.init();
  Utils.updateUserDisplay();

  // Handle logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      AppData.logout();
      Utils.navigate('login.html');
    });
  }
});

// Export for use in other files
window.AppData = AppData;
window.Utils = Utils;
window.Modal = Modal;
