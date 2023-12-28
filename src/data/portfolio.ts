import emoji from 'react-easy-emoji';
import {
    EducationType,
    ExperienceType,
    FeedbackType,
    ProjectType,
    SkillsSectionType,
    SkillBarsType,
    SEODataType,
    SocialLinksType,
    GreetingsType,
    // @ts-ignore
} from './types/sections';

export const greetings: GreetingsType = {
    name: 'Atul Vidhyajyot Hostel',
    greet: "Welcome to AVJ!",
    description:
        "Welcome to our unique haven in Vidhyanagar, where we redefine the concept of a hostel. More than just a residence, we are a close-knit family of 36 bright minds fostering a supportive and dynamic learning environment. Staying with us is not just about accommodation; it's an opportunity for personal and academic growth. Embracing a commitment to education, our hostel is not only free of charge but has seen numerous past residents rise to prominent positions. Our doors are open exclusively to worthy students who aspire to thrive in a community that values excellence and camaraderie.",
};

export const skillsSection: SkillsSectionType = {
    title: 'Gallery',
    data: [
        {
            title: 'General',

        },
        {
            title: 'Cloud Infra-Architecture',
            lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
            skills: [
                emoji('⚡ Experience of working on multiple cloud platforms'),
                emoji(
                    '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
                ),
                emoji(
                    '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: 'AWS',
                    iconifyTag: 'logos:aws',
                },
                {
                    skillName: 'Azure',
                    iconifyTag: 'logos:microsoft-azure',
                },
                {
                    skillName: 'Heroku',
                    iconifyTag: 'logos:heroku-icon',
                },
                {
                    skillName: 'PostgreSQL',
                    iconifyTag: 'logos:postgresql',
                },
                {
                    skillName: 'Github',
                    iconifyTag: 'akar-icons:github-fill',
                },
                {
                    skillName: 'Docker',
                    iconifyTag: 'logos:docker-icon',
                },
                {
                    skillName: 'Github Actions',
                    iconifyTag: 'logos:github-actions',
                },
                {
                    skillName: 'Cloudinary',
                    iconifyTag: 'logos:cloudinary',
                },
                {
                    skillName: 'Nginx',
                    iconifyTag: 'logos:nginx',
                },
                {
                    skillName: 'Sentry',
                    iconifyTag: 'logos:sentry-icon',
                },
            ],
        },
        {
            title: 'Blockchain',
            lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
                ),
                emoji(
                    '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
                ),
                emoji(
                    '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
                ),
                emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
                emoji(
                    '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'Ethereum',
                    iconifyTag: 'logos:ethereum',
                },
                {
                    skillName: 'Solidity',
                    iconifyTag: 'logos:solidity',
                },
                {
                    skillName: 'Web3js',
                    iconifyTag: 'logos:web3js',
                },
                {
                    skillName: 'Metamask',
                    iconifyTag: 'logos:metamask-icon',
                },
                {
                    skillName: 'Ganache',
                    iconifyTag: 'logos:ganache-icon',
                },
            ],
        },
    ],
};
