import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string,
}

const Header = ({ className }:HeaderProps) => {
    const a = 123;
    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <p className="text-align-cen">HEADER</p>
        </div>
    );
};
export default Header;
