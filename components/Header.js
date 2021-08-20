import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>
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
