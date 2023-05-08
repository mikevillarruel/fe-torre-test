import { User } from '../interfaces/interfaces';
import { Avatar } from './Avatar';
import { Skills } from './Skills';
import './UserDetail.css';

interface Props {
    user: User;
}

export const UserDetail = ({ user }: Props) => {
    return (
        <div className="user-detail-container">
            <Avatar name={user.name} picture={user.picture} />
            <Skills skills={user.skills} username={user.username} />
        </div>
    )
}
