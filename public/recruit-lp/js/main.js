document.addEventListener('DOMContentLoaded', function() {
    // ブレークポイント
    const breakpoints = {
        xxs: 320,  // 小型スマートフォン
        xs: 375,   // 標準スマートフォン
        sm: 576,   // 大型スマートフォン
        md: 768,   // タブレット縦向き
        lg: 992,   // 小型デスクトップ/タブレット横向き
        xl: 1200   // 大型デスクトップ
    };
    
    // 現在のブレークポイントを取得
    function getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width < breakpoints.xxs) return 'xxs';
        if (width < breakpoints.xs) return 'xs';
        if (width < breakpoints.sm) return 'sm';
        if (width < breakpoints.md) return 'md';
        if (width < breakpoints.lg) return 'lg';
        if (width < breakpoints.xl) return 'xl';
        return 'xxl';
    }
    
    // 画面サイズに基づいてAOSの設定を最適化
    const currentBreakpoint = getCurrentBreakpoint();
    const isMobile = ['xxs', 'xs', 'sm'].includes(currentBreakpoint);
    const isTablet = currentBreakpoint === 'md';
    
    // AOS初期化（画面サイズに応じて設定を調整）
    AOS.init({
        duration: isMobile ? 600 : 800,
        easing: 'ease-in-out',
        once: true, // アニメーションは一度だけ実行
        mirror: false,
        disable: isMobile ? 'phone' : false, // モバイルでは無効化（パフォーマンス向上のため）
        offset: isMobile ? 30 : 120
    });

    // ヘッダースクロール効果
    const header = document.querySelector('.header');
    const headerScrollThreshold = isMobile ? 30 : 50;

    // スクロールトップボタン
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollThreshold = isMobile ? 200 : 300; // ボタンを表示するスクロール位置のしきい値

    function handleScroll() {
        // ヘッダースクロール効果
        if (header) {
            if (window.scrollY > headerScrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // スクロールトップボタンの表示制御
        if (scrollTopBtn) {
            if (window.scrollY > scrollThreshold) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    }

    // スクロールイベントの最適化（パフォーマンス向上のため）
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // リサイズイベントの最適化
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // ブレークポイント変更時の処理
            const newBreakpoint = getCurrentBreakpoint();
            if (newBreakpoint !== currentBreakpoint) {
                // ブレークポイントが変わった場合に必要な処理
                location.reload(); // 必要に応じてリロード
            }
        }, 250);
    });

    // 初期実行
    handleScroll();

    // スクロールトップボタン機能
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // モバイルメニュートグル
    const menuToggle = document.querySelector('.header__toggle');
    const menuMobile = document.querySelector('.header__menu-mobile');
    const nav = document.querySelector('.header__nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            menuMobile.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // モバイルメニューのリンクをクリックしたらメニューを閉じる
    const mobileMenuLinks = document.querySelectorAll('.header__menu-mobile a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menuMobile.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // スムーススクロール - 画面サイズに応じてオフセットを調整
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                // 画面サイズに応じて追加オフセットを調整
                const additionalOffset = isMobile ? 10 : (isTablet ? 20 : 30);
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - additionalOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQアコーディオン
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const icon = item.querySelector('.faq__icon i');
        
        question.addEventListener('click', () => {
            // 現在のアクティブなアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.faq__icon i');
                    if (otherIcon) {
                        otherIcon.textContent = 'add';
                    }
                }
            });
            
            // 現在のアイテムの状態を切り替える
            item.classList.toggle('active');
            if (icon) {
                icon.textContent = item.classList.contains('active') ? 'remove' : 'add';
            }
        });
    });
    
    // FAQ カテゴリフィルター - レスポンシブ対応調整
    const faqCategories = document.querySelectorAll('.faq__category');
    const allFaqItems = document.querySelectorAll('.faq__item');
    
    if (faqCategories.length > 0) {
        faqCategories.forEach(category => {
            category.addEventListener('click', () => {
                // アクティブカテゴリを更新
                faqCategories.forEach(cat => cat.classList.remove('active'));
                category.classList.add('active');
                
                const filter = category.dataset.filter;
                
                // すべてのFAQアイテムをフィルタリング
                allFaqItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = '';
                        item.classList.remove('hidden');
                    } else if (item.dataset.category === filter) {
                        item.style.display = '';
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }
                });
                
                // モバイル時は選択後にスクロール
                if (isMobile) {
                    setTimeout(() => {
                        const firstVisibleItem = document.querySelector('.faq__item:not(.hidden)');
                        if (firstVisibleItem) {
                            firstVisibleItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 100);
                }
            });
        });
    }
    
    // インタビュースライダー - レスポンシブ対応
    const interviewSlider = document.querySelector('.interview__slider');
    const interviewItems = document.querySelectorAll('.interview__item');
    const interviewPrev = document.querySelector('.interview__prev');
    const interviewNext = document.querySelector('.interview__next');
    
    if (interviewSlider && interviewItems.length > 0) {
        let currentSlide = 0;
        const totalSlides = interviewItems.length;
        
        // スライダーの自動再生間隔を画面サイズに応じて調整
        const sliderAutoplayInterval = isMobile ? 5000 : 8000;
        
        // スライドを表示する関数
        const showSlide = (index) => {
            // 範囲内に収める
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            
            // 現在のスライドを更新
            currentSlide = index;
            
            // すべてのスライドを非表示にする
            interviewItems.forEach(item => {
                item.style.display = 'none';
            });
            
            // 現在のスライドを表示する
            interviewItems[currentSlide].style.display = 'flex';
            
            // モバイルでは画面全体に表示するための調整
            if (isMobile) {
                interviewItems[currentSlide].style.flexDirection = 'column';
                interviewItems[currentSlide].querySelector('.interview__image').style.width = '100%';
            }
        };
        
        // 初期表示
        showSlide(currentSlide);
        
        // 前へボタン
        if (interviewPrev) {
            interviewPrev.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }
        
        // 次へボタン
        if (interviewNext) {
            interviewNext.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }
        
        // タッチスワイプ対応（モバイル向け）
        if (isMobile) {
            let touchStartX = 0;
            let touchEndX = 0;
            
            interviewSlider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            interviewSlider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    // 左スワイプ - 次へ
                    showSlide(currentSlide + 1);
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    // 右スワイプ - 前へ
                    showSlide(currentSlide - 1);
                }
            }
        }
        
        // 自動スライド切り替え
        let sliderInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, sliderAutoplayInterval);
        
        // スライダーにホバーした時は自動再生を一時停止
        interviewSlider.addEventListener('mouseenter', () => {
            clearInterval(sliderInterval);
        });
        
        interviewSlider.addEventListener('mouseleave', () => {
            sliderInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, sliderAutoplayInterval);
        });
    }
    
    // タイプライターエフェクト用の要素を取得
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    // タイプライターエフェクトの初期化（カスタム実装）
    if (typewriterElements.length > 0) {
        initTypewriter();
    }
    
    // Particles.jsの初期化
    if (document.querySelector('.hero')) {
        initParticles();
    }
    
    // 画像の遅延読み込み（パフォーマンス最適化）
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    if (lazyImages.length > 0) {
        initLazyLoading();
    }
    
    // 日本語入力フォームの最適化
    initJapaneseFormOptimization();
});

// タイプライターエフェクト（コードエディタ風）
function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.visibility = 'visible';
        
        // 各文字ごとにspanで囲む
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text.charAt(i);
            charSpan.style.visibility = 'hidden';
            element.appendChild(charSpan);
            
            // 1文字ずつ表示する（タイミングをずらす）
            setTimeout(() => {
                charSpan.style.visibility = 'visible';
                // タイピング音エフェクト（オプション）
                // playTypeSound();
            }, 100 * i + (index * 500)); // 複数要素がある場合は開始タイミングをずらす
        }
    });
}

// 遅延読み込み関数
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    const lazyLoadingOptions = {
        rootMargin: '200px 0px', // ビューポートのマージンを設定
        threshold: 0.01 // 表示される割合のしきい値
    };
    
    if ('IntersectionObserver' in window) {
        const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // data-src属性がある場合
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // loading="lazy"属性がある場合
                    if (img.hasAttribute('loading')) {
                        img.onload = () => {
                            img.classList.add('loaded');
                        };
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, lazyLoadingOptions);
        
        lazyImages.forEach(image => {
            lazyLoadObserver.observe(image);
        });
    } else {
        // IntersectionObserverがサポートされていない場合のフォールバック
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
        });
    }
}

// 日本語入力フォームの最適化
function initJapaneseFormOptimization() {
    const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    
    inputFields.forEach(field => {
        // IMEモードの設定
        if (field.getAttribute('lang') === 'ja' || !field.hasAttribute('lang')) {
            // 日本語入力が必要なフィールド
            field.setAttribute('inputmode', 'text');
            field.style.imeMode = 'active'; // 非推奨だが、一部のブラウザではまだ機能する
        }
        
        // IME入力中の検証を防止
        field.addEventListener('compositionstart', () => {
            field.dataset.composing = 'true';
        });
        
        field.addEventListener('compositionend', () => {
            field.dataset.composing = 'false';
        });
        
        // バリデーション処理
        field.addEventListener('input', () => {
            if (field.dataset.composing === 'true') {
                return; // 日本語入力中は検証をスキップ
            }
            // バリデーション処理をここに実装
        });
    });
}

// Particles.js初期化関数
function initParticles() {
    // 画面サイズに基づいてパーティクル数を調整
    let particleCount = 80;
    if (window.innerWidth < 768) {
        particleCount = 40; // モバイルでは少なめに
    } else if (window.innerWidth < 992) {
        particleCount = 60; // タブレットでは中程度に
    }

    // 先に作成したcanvasがあれば削除（競合防止）
    const existingCanvas = document.querySelector('.particles-canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }
    
    // particles-jsのコンテナ要素を作成
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    particlesContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;';
    
    // コンテナ要素をヒーローセクションに追加
    const heroSection = document.querySelector('.hero');
    heroSection.prepend(particlesContainer);
    
    // Particles.jsの設定
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": particleCount,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#2563eb", "#10b981", "#8b5cf6", "#ffffff"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2563eb",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": window.innerWidth > 768, // モバイルでは無効化
                    "mode": "grab"
                },
                "onclick": {
                    "enable": window.innerWidth > 768, // モバイルでは無効化
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}
