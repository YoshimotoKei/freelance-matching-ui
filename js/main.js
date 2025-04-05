// メインJavaScriptファイル

// タブ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // アクティブなタブボタンのクラスを切り替え
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // ここに実際のタブコンテンツ切り替えロジックを追加
        // 現在はデモ用にスタイルの切り替えのみ実装
      });
    });
  }
});

// 検索バーの機能
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    if (searchInput) {
      const query = searchInput.value;
      if (query) {
        // 検索クエリが入力されている場合の処理
        console.log('検索クエリ:', query);
        // 実際のアプリケーションでは、ここでAPIリクエストなどを行う
      }
    }
  });
}

// 検索入力でEnterキーを押した時の処理
if (searchInput) {
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      if (searchBtn) {
        searchBtn.click();
      }
    }
  });
}

// ボタンのホバーエフェクト強化
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});

// スキルタグのホバーエフェクト
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// 詳細ページへのリンク機能
const detailButtons = document.querySelectorAll('.btn-secondary');
detailButtons.forEach(button => {
  if (button.textContent.trim() === '詳細') {
    button.addEventListener('click', function(e) {
      const row = this.closest('tr');
      if (row) {
        // 現在のページに基づいて適切な詳細ページにリダイレクト
        const currentPage = window.location.pathname;
        if (currentPage.includes('freelancers')) {
          window.location.href = 'freelancer-detail.html';
        } else if (currentPage.includes('projects')) {
          window.location.href = 'project-detail.html';
        } else if (currentPage.includes('matching')) {
          // マッチング詳細ページがある場合はそこにリダイレクト
        }
      }
      e.stopPropagation(); // 行クリックイベントとの重複を防止
    });
  }
});

// テーブル行クリックで詳細ページに移動
const tableRows = document.querySelectorAll('tbody tr');
tableRows.forEach(row => {
  if (!row.getAttribute('onclick')) {
    row.style.cursor = 'pointer';
    row.addEventListener('click', function() {
      const currentPage = window.location.pathname;
      if (currentPage.includes('freelancers')) {
        window.location.href = 'freelancer-detail.html';
      } else if (currentPage.includes('projects')) {
        window.location.href = 'project-detail.html';
      }
    });
  }
});

// ダッシュボードカードのクリックイベント
const dashboardCards = document.querySelectorAll('.card');
dashboardCards.forEach(card => {
  card.addEventListener('click', function(e) {
    // カードのボタンがクリックされた場合は、カード全体のクリックイベントを発火させない
    if (e.target.classList.contains('btn')) {
      return;
    }
    
    const cardTitle = this.querySelector('.card-title').textContent.trim();
    
    // カードのタイトルに基づいて適切なページにリダイレクト
    if (cardTitle === 'フリーランス') {
      window.location.href = 'freelancers.html';
    } else if (cardTitle === '案件') {
      window.location.href = 'projects.html';
    } else if (cardTitle === 'マッチング') {
      window.location.href = 'matching.html';
    } else if (cardTitle === 'AI解析状況') {
      // AI解析状況の詳細ページがある場合はそこにリダイレクト
    }
  });
});
