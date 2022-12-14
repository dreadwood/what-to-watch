import {Link, useLocation} from 'react-router-dom';
import {TabsType} from '../../const';
import {Comments} from '../../types/comment';
import {Film} from '../../types/film';
import TabDetails from './tab-details';
import TabOverview from './tab-overview';
import TabReviews from './tab-reviews';

type TabsProps = {
  film: Film
  comments: Comments
}

function Tabs({film, comments}: TabsProps): JSX.Element {
  const {hash} = useLocation();
  const activeTab = hash || TabsType.Overview;

  const renderActiveTab = (type: string) => {
    switch (type) {
      case TabsType.Overview:
        return <TabOverview film={film} />;
      case TabsType.Details:
        return <TabDetails film={film} />;
      case TabsType.Reviews:
        return <TabReviews comments={comments} />;
      default:
        return <TabOverview film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.entries(TabsType).map((type) => (
            <li className={`film-nav__item${activeTab === type[1] ? ' film-nav__item--active' : ''}`} key={type[0]}>
              <Link className="film-nav__link" to={`.${type[1]}`}>
                {type[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {renderActiveTab(hash)}
    </div>
  );
}

export default Tabs;
