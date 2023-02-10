// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import Logo from '../assets/img/logo.png';
import LogoV2 from '../assets/img/logo-footer.png';
import HeroImg from '../assets/img/hero-img.png';
import AboutImg from '../assets/img/about.png';
import Feature1Img from '../assets/img/features/feature1.png';
import Feature2Img from '../assets/img/features/feature2.png';
import Feature3Img from '../assets/img/features/feature3.png';
import Feature4Img from '../assets/img/features/feature4.png';

export const navigationData = [
    {
        name: 'Home',
        href: '#home',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Features',
        href: '#features',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
]

export const heroData = {
    title: `Share Your Memories, With`,
    subtitle: `"Because today will be the past"`,
    btnText: 'Get Started',
    image: HeroImg,
};

export const aboutData = {
    image: AboutImg,
    title: `Find Out A Little More About Us`,
    subtitle: `We believe that everyone has their own experience, 
               but what happens if the experience they have has a positive impact on others?`,
}

export const featuresData = {
    title: `Some Services We Offer`,
    subtitle: `Ea occaecat deserunt sunt velit. Tempor incididunt quis laboris do reprehenderit sit 
                commodo laboris aliquip aliqua eu voluptate nostrud in. Aute officia do enim non`,
    list: [
        {
            image: Feature1Img,
            title: `Record Your Progress`,
            description: `1% every day is fine. So, don't delay your progress!`,
            linkText: `Learn More`,
            delay: 400,
        },
        {
            image: Feature2Img,
            title: `Find The First Step`,
            description: `Sometimes we have trouble finding the first step. Discover and experiment!`,
            linkText: `Learn More`,
            delay: 700,
        },
        {
            image: Feature3Img,
            title: `"Please Remind Me!"`,
            description: `Connected directly to Google Calendar, make your day easier!`,
            linkText: `Learn More`,
            delay: 1000,
        },
        {
            image: Feature4Img,
            title: `Collaboration Is Key`,
            description: `Join groups of interest. Start the activity and grow together!`,
            linkText: `Learn More`,
            delay: 1300,
        },
    ]
}

export const testimonialsData = [
    {
        // image: Avatar1Img,
        name: 'Seyena',
        web: 'seyena@mail',
        message:
            'Tú eres el mejor portero del mundo.',
        delay: '300',
    },
    {
        // image: Avatar2Img,
        name: 'yaae',
        web: 'yaae@mail',
        message:
            'Tú eres el mejor portero del mundo.',
        delay: '600',
    },
    {
        // image: Avatar3Img,
        name: 'Huyao',
        web: 'huyao@mail',
        message:
            'Tú eres el mejor portero del mundo.',
        delay: '900',
    },
    {
        // image: Avatar3Img,
        name: 'Yeyan',
        web: 'yeyan@mail',
        message:
            'Tú eres el mejor portero del mundo.',
        delay: '900',
    },
    {
        // image: Avatar3Img,
        name: 'Ayaya',
        web: 'ayaya@mail',
        message:
            'Tú eres el mejor portero del mundo.',
        delay: '900',
    },
];

export const contactData = {
    title: `Contact Us`,
    subtitle: `Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.`,
    email: `Your Email`,
    subject: `Subject`,
    message: `Your Message`,
}

export const footerData = {
    logo: LogoV2,
    address: 'Memorest, 123 Jl. Jalan 45678',
    email: 'info@memorest.project',
    phone: '1-234-5678 (Main)',
    list1: [
        {
            name: 'Profile',
            href: '#',
        },
        {
            name: 'Features',
            href: '#',
        },
        {
            name: 'Careers',
            href: '#',
        },
    ],
    list2: [
        {
            name: 'Support',
            href: '#',
        },
        {
            name: 'Sign Up',
            href: '#',
        },
        {
            name: 'Guide',
            href: '#',
        },
        {
            name: 'Reports',
            href: '#',
        },
        {
            name: 'Q & A',
            href: '#',
        },
    ],
    socialList: [
        {
            icon: <FaYoutube />,
            href: '#',
        },
        {
            icon: <FaInstagram />,
            href: '#',
        },
        {
            icon: <FaGithub />,
            href: '#',
        },
    ],
};

export const copyrightData = {
    text: `© Memorest, 2023. All rights reserved. Company Registration Number: 01234567.`,
    icon: <BsChatDotsFill />,
};


export default Logo;