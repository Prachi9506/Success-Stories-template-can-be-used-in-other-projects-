 // Success Stories Data
const successStories = [
    {
        name: "Prachi Sharma (Class of 2019, B.Tech CSE)",
        title: "Software Engineer at Google",
        preview: "From coding contests to Google – Priya turned her passion into a global career.",
        achievement: "Secured role at Google after internship",
        fullStory: "Priya always had a passion for problem-solving and coding. During her time at college, she actively participated in hackathons and coding contests, which helped her sharpen her skills. With persistence and guidance from mentors, she landed an internship at Google and later converted it into a full-time role.",
        initials: "PM"
    },
    {
        name: "Rohan Sharma (Class of 2018, B.Tech IT)",
        title: "Full Stack Developer at Microsoft",
        preview: "Rohan’s open-source contributions paved the way to Microsoft.",
        achievement: "Key contributor to open-source projects",
        fullStory: "Rohan built multiple open-source projects during his time in college, gaining recognition in the developer community. His GitHub profile stood out, leading to internship opportunities and ultimately a full-time offer from Microsoft. Today, he works on large-scale distributed systems that power millions of users worldwide.",
        initials: "RS"
    },
    {
        name: "Ananya Gupta (Class of 2020, B.Tech CSE)",
        title: "Software Developer at Amazon",
        preview: "From coding club president to building scalable e-commerce systems.",
        achievement: "Leadership in campus coding club",
        fullStory: "Ananya served as the president of her college coding club, where she mentored juniors and organized hackathons. Her problem-solving skills and leadership helped her crack Amazon’s interviews. She now works on optimizing recommendation systems for e-commerce customers.",
        initials: "AG"
    },
    {
        name: "Arjun Verma (Class of 2017, B.Tech CSE)",
        title: "AI Research Engineer at NVIDIA",
        preview: "Arjun turned his love for machine learning into groundbreaking AI research.",
        achievement: "Research in AI & Deep Learning",
        fullStory: "Arjun was fascinated by AI during his final year project on computer vision. He published research papers in reputed journals and later joined NVIDIA. Today, he contributes to developing AI frameworks that are used by developers and researchers globally.",
        initials: "AV"
    },
    {
        name: "Simran Kaur (Class of 2021, B.Tech CSE)",
        title: "Software Engineer at Adobe",
        preview: "Internship projects at Adobe led Simran to a full-time offer.",
        achievement: "Internship converted to full-time",
        fullStory: "Simran secured an internship at Adobe during her final year, where she worked on enhancing collaborative design tools. Her performance impressed the team, and she received a full-time offer. She now contributes to Adobe’s cloud-based design software used by millions.",
        initials: "SK"
    },
    {
        name: "Kunal Bhatia (Class of 2016, B.Tech IT)",
        title: "Founder of CodeCraft Solutions",
        preview: "Kunal left his MNC job to launch a thriving software startup.",
        achievement: "Built a successful SaaS startup",
        fullStory: "Kunal started his career at a multinational software company but always dreamed of entrepreneurship. In 2019, he founded CodeCraft Solutions, a SaaS company providing workflow automation tools for small businesses. Today, the startup serves clients across three continents.",
        initials: "KB"
    }
];

// DOM Elements
const storiesGrid = document.getElementById('storiesGrid');
const modal = document.getElementById('storyModal');
const modalBody = document.getElementById('modalBody');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderStories();
    setupEventListeners();
});

// Render success stories
function renderStories() {
    storiesGrid.innerHTML = '';
    
    successStories.forEach((story, index) => {
        const storyCard = createStoryCard(story, index);
        storiesGrid.appendChild(storyCard);
    });
}

// Create individual story card
function createStoryCard(story, index) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.onclick = () => openModal(story);
    
    card.innerHTML = `
        <div class="story-image">${story.initials}</div>
        <h3 class="story-name">${story.name}</h3>
        <p class="story-title">${story.title}</p>
        <p class="story-preview">${story.preview}</p>
        <span class="story-achievement">${story.achievement}</span>
    `;
    
    // Add animation delay for staggered entrance
    card.style.animationDelay = `${index * 0.1}s`;
    
    return card;
}

// Open modal with story details
function openModal(story) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-name">${story.name}</h2>
            <p class="modal-title">${story.title}</p>
        </div>
        <div class="modal-body">
            <p>${story.fullStory}</p>
            <div class="modal-achievement">
                <strong>Key Achievement:</strong> ${story.achievement}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll to stories section
function scrollToStories() {
    document.getElementById('stories').scrollIntoView({
        behavior: 'smooth'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });
}

// Add entrance animations
function addEntranceAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe story cards for entrance animation
    document.querySelectorAll('.story-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize entrance animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addEntranceAnimations, 100);

});

