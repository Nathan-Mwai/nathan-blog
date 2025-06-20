import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const Header = () => {
    return (
        <>
            <div className={'flex flex-col w-full gap-y-6 justify-center items-center'}>
                <Badge>Nathan&apos;s WorkShop</Badge>
                <div>
                    <h1>Lessons and Research for the future tech guru</h1>
                </div>
                <div className={'flex flex-col md:flex-row gap-3'}>
                    <Input className={'w-full '} placeholder={'Your Email'}/>
                    <Button className={'w-full md:w-1/3'}>Subscribe</Button>
                </div>
                <p>No spam, unsubscribe anytime</p>
            </div>
        </>
    )
}
export default Header
