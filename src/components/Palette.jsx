import React from 'react'

const Palette = () => {
  return (
    <>
  <div className="flex lg:gap-3 justify-center">
                <div className="flex justify-around w-full px-5 base-text">
                  <div className="flex lg:gap-3">
                    <div className="bg-personal palette"></div>
                    <div>Personal</div>
                  </div>
                  <div className="flex lg:gap-3">
                    <div className="bg-shopping palette"></div>
                    <div>Shopping</div>
                  </div>
                  <div className="flex lg:gap-3">
                    <div className="bg-phone palette"></div>
                    <div>Phone</div>
                  </div>
                  <div className="flex lg:gap-3">
                    <div className="bg-other palette"></div>
                    <div>Other</div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Palette