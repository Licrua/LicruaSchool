type SocialLink = {
  id: string;
  name: string;
  img: string;
  url: string;
};

const socialLinks: SocialLink[] = [
	{
		id: 'vk',
		name: 'VK',
		img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg',
		url: 'https://vk.com/hgn41',
	},
	{
		id: 'telegram',
		name: 'Telegram',
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
		url: 'https://t.me/Ilya01034',
	},
	{
		id: 'email',
		name: 'Email',
		img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
		url: 'mailto:ilay1275@mail.ru',
	},
	{
		id: 'github',
		name: 'Github',
		img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', // Белая иконка GitHub
		url: 'https://github.com/Licrua',
	},
];

export default socialLinks;
