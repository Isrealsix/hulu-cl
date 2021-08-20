import Image from 'next/image';

const Header = () => {
	return (
		<header className="header">
			<h1>Headaaa</h1>
			<Image
				className="object-contain"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzSKcUFcGmT1DPyZhSU6XHp7fn9Oj7LUK3A&usqp=CAU"
				width={200}
				height={100}
				alt=""
			/>
		</header>
	);
};

export default Header;
