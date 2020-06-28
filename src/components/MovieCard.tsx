import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { imageUrl } from '../utils/imageUrl'
import { DescriptionModal } from './DescriptionModal'
import { MovieCardProps } from './interface'

export const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  const [showModal, setshowModal] = useState<boolean>(false);
  const handleShowModal = () => {
    setshowModal(!showModal);
  }
  return (
    <div className="movieCard-wrap">
      <div className="movieCardImage-wrap"  >
        <img onClick={() => { setshowModal(true); }} className="movieCardImage" src={`${imageUrl}${item.poster_path}`} alt="" />
      </div>
      <div className="modalWrap">
        {showModal ? <DescriptionModal showModal={showModal} handleShowModal={handleShowModal} movieId={item.id} /> : null}
      </div>
    </div>
  );
}


