/**
 * CESCA - Lógica de la Aplicación
 * Desarrollado con Vue.js 3
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            isMenuOpen: false,
            isScrolled: false,
            menuItems: [
                { text: 'Inicio', link: '#inicio' },
                { text: 'Sobre CESCA', link: '#sobre-cesca' },
                { text: 'Programas', link: '#programas' },
                { text: 'Pensamiento', link: '#pensamiento' },
                { text: 'Recursos', link: '#recursos' }
            ],
            programs: [
                {
                    title: 'Maestría en Apologética Cultural',
                    description: 'Un programa riguroso diseñado para equipar a líderes con herramientas intelectuales para defender la fe en la plaza pública.',
                    icon: 'fas fa-graduation-cap',
                    details: [
                        'Duración: 2 años',
                        'Modalidad: Híbrida',
                        'Enfoque: Filosofía, Teología y Cultura'
                    ]
                },
                {
                    title: 'Diplomado en Economía y Ética',
                    description: 'Análisis de los sistemas económicos desde una perspectiva bíblica y de libre mercado, desafiando el estatismo.',
                    icon: 'fas fa-chart-line',
                    details: [
                        'Duración: 6 meses',
                        'Modalidad: Virtual',
                        'Enfoque: Órdenes Espontáneos'
                    ]
                },
                {
                    title: 'Seminario de Pensamiento Crítico',
                    description: 'Taller intensivo para desarrollar habilidades de argumentación lógica y detección de falacias en el discurso contemporáneo.',
                    icon: 'fas fa-brain',
                    details: [
                        'Duración: 4 semanas',
                        'Modalidad: Presencial',
                        'Enfoque: Lógica y Retórica'
                    ]
                }
            ],
            articles: [
                {
                    title: 'La Fe en la Era Secular',
                    category: 'Apologética',
                    image: 'images/apologetica.png',
                    excerpt: '¿Cómo mantener una fe vibrante e intelectualmente honesta en un mundo que ha declarado la muerte de Dios? Un análisis desde Taylor y Lewis.'
                },
                {
                    title: 'Capitalismo y Virtud Cristiana',
                    category: 'Economía',
                    image: 'images/capitalismovirtud.png',
                    excerpt: 'Desmontando el mito de que el mercado libre es inherentemente egoísta. Una exploración de la cooperación social voluntaria.'
                },
                {
                    title: 'La Reforma y la Educación',
                    category: 'Historia',
                    image: 'images/reforma edicacion.png',
                    excerpt: 'El impacto histórico del pensamiento reformado en la alfabetización y el desarrollo de las universidades modernas.'
                }
            ],
            events: [
                {
                    icon: 'fas fa-microphone-alt',
                    title: 'Conferencias',
                    description: 'Espacios de diálogo sobre fe y cultura.'
                },
                {
                    icon: 'fas fa-comments',
                    title: 'Debates',
                    description: 'Intercambio de ideas con rigor intelectual.'
                },
                {
                    icon: 'fas fa-user-edit',
                    title: 'Inscripciones',
                    description: 'Abiertas para el ciclo académico 2026.'
                }
            ],
            form: {
                name: '',
                email: '',
                interest: 'maestria',
                message: ''
            }
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        submitForm() {
            // Simulación de envío de formulario
            console.log('Formulario enviado:', this.form);
            alert(`Gracias ${this.form.name}. Hemos recibido tu interés en ${this.form.interest}. Pronto nos pondremos en contacto contigo.`);
            
            // Resetear formulario
            this.form = {
                name: '',
                email: '',
                interest: 'maestria',
                message: ''
            };
        }
    },
    mounted() {
        // Agregar listener para el scroll
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        // Limpiar listener
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');