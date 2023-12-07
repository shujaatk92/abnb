"use client"

interface ContainerProbs {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProbs> = ({children}) => {
  return (
    <div className="
    max-w-[2520px]
    mx-auto
    lx:px-20
    md:px-10
    sm:px-2
    px-4
    ">
      {children}
    </div>
  )
}

export default Container
