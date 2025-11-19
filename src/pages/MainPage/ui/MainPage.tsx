import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import ProfileCard from '@/shared/ui/ProfileCard/ProfileCard';
import { Header } from '@/widgets/Header';

interface MainPageProps {
    className?: string,
}

const MainPage = ({ className }:MainPageProps) => {
    const a = 123;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header />
            <ProfileCard />
        </div>
    );
};
export default MainPage;
