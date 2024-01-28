import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
    return (
        <p>
            {statusCode ? `서버에서 ${statusCode}` : '클라이언트에서'} 에러가 발생했습니다.
        </p>
    )

}
Error.getInitalProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : ''
    return { statusCode }
}