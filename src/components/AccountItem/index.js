import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-1/128768822_3679149732310723_7704463106016214334_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-6&_nc_sid=7206a8&_nc_ohc=lZPSO2FvYycAX9YeTc4&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_Yb5nf16Rxx5Yv8_ma4eeWe6p8oGxol0OpMJf-3ZGdsQ&oe=62A3D0C9"
                alt="Can"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phạm Thành Can</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phamthanhcan</span>
            </div>
        </div>
    );
}

export default AccountItem;
