import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper'
import { CSSTransition } from 'react-transition-group'
import { requestMethod } from '../../Controller/Request'
import actions from '../../Redux/Actions'
  
// import { ReactComponent as ArrowRight } from '../../../assets/svg/keyboard_arrow_right.svg'
// import { ReactComponent as ArrowLeft } from '../../../assets/svg/keyboard_arrow_left.svg'
// import { ReactComponent as CloseIcon } from '../../../assets/svg/close.svg'
// import { ReactComponent as PhotoIcon } from '../../../assets/svg/add_photo.svg'
// import { ReactComponent as BasketIcon } from '../../../assets/svg/basket.svg'
import { ButtonFirst } from '../Button/Button'

import 'swiper/css/swiper.css'
import '../Helpers/visually-hidden.css'
import '../Helpers/icon.css'
import './index.css'

const SliderFirst = props => {
  const { windowAvatar, setWindowAvatar, userData } = props
  const { setPhoto } = actions

  const [arrImages, setArrImages] = useState(userData.photo)
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const [slideIndex, setSlideIndex] = useState()
  
  const defaultImg = [{ id: 'local-img' }]

  const goNext = () => {
    if (gallerySwiper !== null) {
      gallerySwiper.slideNext()
    }
  }

  const goPrev = () => {
    if (gallerySwiper !== null) {
      gallerySwiper.slidePrev()
    }
  }

  const paramSliderMain = {
    getSwiper: getGallerySwiper,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    shouldSwiperUpdate: true,
    slidesPerView: 'auto',
    // activeSlideKey: slideIndex,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  }

  const paramSliderThumb = {
    getSwiper: getThumbnailSwiper,
    shouldSwiperUpdate: true,
    // activeSlideKey: slideIndex,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.5,
    slideToClickedSlide: true
  }

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper

      thumbnailSwiper.on('slideChange', () => {
        setSlideIndex(
          arrImages.map((el, i) => {
            if (i === thumbnailSwiper.activeIndex) {
              el.is_main = true
            } else {
              el.is_main = false
            }
          })
        )
      })
    }
  }, [gallerySwiper, thumbnailSwiper, arrImages])

  const deleteFormatB64 = elString => {
    if (elString !== 'local-img') {
      const subStr = elString.indexOf('base64,') + 7
      return elString.slice(subStr)
    }
  }

  const getFileInfo = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const formatFile = file.type.split('/').pop()
        const nameFile = file.name.slice(0, file.name.lastIndexOf('.'))

        if (formatFile !== 'jpeg') {
          alert(
            `Недопустимый формат файла: ${formatFile}.\nЗагружайте изображения формата .jpg или .jpeg`
          )
        } else {
          resolve({
            id: 0,
            is_main: false,
            file: deleteFormatB64(reader.result),
            file_format: formatFile,
            file_name: nameFile
          })
        }
      }
      reader.onerror = error => reject(error)
    })
  }

  const requestData = () => {
    requestMethod({
      method: 'POST',
      addURL: 'users/changePhotos',
      data: {
        photo: arrImages[0].id === 'local-img' ? [] : arrImages,
        user_id: userData.id
      }
    }).then(() => {
      setPhoto(arrImages)
    })
  }

  const setPathImg = element => {
    if (arrImages[0].file && arrImages[0].id !== 'local-img') {
      return `data:image/jpeg;base64,${element.file}`
    } else {
      return `${process.env.PUBLIC_URL}/assets/user-images/default-user.jpg`
    }
  }

  const deleteImg = el => {
    if (arrImages.length > 1) {
      setArrImages(() => {
        const newArrImg = arrImages.filter(elTarget => elTarget !== el)
        newArrImg[0].is_main = true
        return newArrImg
      })
    } else if (arrImages.length === 1 && arrImages[0].id !== 'default') {
      setArrImages(defaultImg)
    }
  }

  const renderSlidesMain = () => {
    return arrImages.map((el, i) => (
      <div
        key={`slider-main-img-${i}`}
        style={{
          backgroundImage: `url(${setPathImg(el)})`
        }}
        >
        <div className="slider-first__bottom">
          <div className="slider-first__btn">
            <input
              className="visually-hidden"
              type="file"
              id={`add-img-${i}`}
              accept=".jpg, .jpeg, .png"
              onChange={evt => {
                getFileInfo(evt.target.files[0]).then(dataFile => {
                  if (arrImages[0].id !== 'default' && arrImages[0].id !== 'local-img') {
                    setArrImages([...arrImages, dataFile])
                  } else {
                    const newDataFile = () => {
                      dataFile.is_main = true
                      return [dataFile]
                    }
                    setArrImages(newDataFile())
                  }
                })
              }}
            ></input>
            <label htmlFor={`add-img-${i}`}>
              {/* <PhotoIcon className="icon icon_base0-fill icon_size_20" /> */}
              <span>Загрузить фотографию</span>
            </label>
          </div>
          <button className="slider-first__btn" onClick={() => deleteImg(el)}>
            {/* <BasketIcon className="icon icon_base0-fill icon_size_20" /> */}
            <span>Удалить фотографию</span>
          </button>
        </div>
      </div>
    ))
  }

  const renderSlidesThumb = () => {
    return arrImages.map((el, i) => (
      <div
        key={`slider-thumb-img-${i}`}
        style={{
          backgroundImage: `url(${setPathImg(el)})`
        }}
        >
        <button className="slider-first__del-img" onClick={() => deleteImg(el)}>
          {/* <CloseIcon className="icon icon_base0-stroke icon_size_8" /> */}
        </button>
      </div>
    ))
  }

  return (
    <CSSTransition
      classNames="fade-in"
      in={windowAvatar}
      timeout={500}
      onEnter={() => setWindowAvatar(true)}
      onExit={() => setWindowAvatar(false)}
      unmountOnExit
      >
      <React.Fragment>
        {windowAvatar && (
          <section className="slider-first">
            <div className="">{slideIndex}</div>

            <div className="slider-first__main">
              <Swiper {...paramSliderMain}>{renderSlidesMain()}</Swiper>
            </div>
            <div className="slider-first__thumb">
              <Swiper {...paramSliderThumb}>{renderSlidesThumb()}</Swiper>
            </div>
            <button className="slider-first__nav slider-first__nav_prev" onClick={goPrev}>
              {/* <ArrowLeft className="icon icon_base0-stroke icon_size_30" /> */}
            </button>
            <button className="slider-first__nav slider-first__nav_next" onClick={goNext}>
              {/* <ArrowRight className="icon icon_base0-stroke icon_size_30" /> */}
            </button>

            <div className="slider-first__wrap-btn">
              <ButtonFirst
                onClick={() => {
                  requestData()
                }}
              >
                Применить
              </ButtonFirst>
            </div>

            <button className="slider-first__close" onClick={() => setWindowAvatar(false)}>
              {/* <CloseIcon className="icon icon_grey-stroke icon_size_30" /> */}
            </button>
          </section>
        )}
      </React.Fragment>
    </CSSTransition>
  )
}

export default SliderFirst
