import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import avatar from '../../../app/assets/image/avatar.jpg';
import voln from '../../../app/assets/image/voln.svg';
import fbIcon from '../../../app/assets/image/icon_fb.svg';

interface ProfileCardProps {
    className?: string,
}

const ProfileCard = ({ className }: ProfileCardProps) => (
    <div className={classNames(cls.ProfileCard, {}, ['mt-20'])}>
        <div className={cls.card}>
            <div className={cls.head_block}>
                <img src={avatar} alt="аватар" className={cls.avatar} />
            </div>
            <img src={voln} alt="аватар" className={cls.voln} />

            <p className={cls.name}>Johnny Rogers</p>
            <p className={cls.tag}>@broer_front</p>
            <div className={cls.icons}>
                <img src={fbIcon} alt="иконка соц сетей" className={cls.fb_icon} />
                <img src={fbIcon} alt="иконка соц сетей" className={cls.fb_icon} />
                <img src={fbIcon} alt="иконка соц сетей" className={cls.fb_icon} />
                <img src={fbIcon} alt="иконка соц сетей" className={cls.fb_icon} />
                <img src={fbIcon} alt="иконка соц сетей" className={cls.fb_icon} />
            </div>
            <div className="d-f jc-cen">
                <p className={cls.description}>
                    Crafting brand and communication strategies,
                    creating visual designs, leading art direction,
                    and capturing portraits through photography
                </p>
            </div>

            <div className={cls.btn_group}>
                <button type="button" className={cls.left_btn}>
                    Follow
                </button>
                <button type="button" className={cls.right_btn}>
                    Message
                </button>
            </div>
        </div>
    </div>
);

export default ProfileCard;
