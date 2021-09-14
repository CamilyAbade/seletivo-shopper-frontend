import {LoadingStyled} from './LoadingStyled'

export function Loading() {
    return (
        <LoadingStyled>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
        </LoadingStyled>
    )
  }