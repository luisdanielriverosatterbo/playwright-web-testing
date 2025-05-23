import {Locator, Page} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class NavigationPage extends HelperBase{

    //readonly page: Page
    readonly formLayoutMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page){

        //this.page = page
        super(page)
        this.formLayoutMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart table')
        this.toastrMenuItem = page.getByText('Toastr')
        this.tooltipMenuItem = page.getByText('Tooltip')

    }

    async formLayoutsPage(){
        //await this.page.getByText('Forms').click()
        //After refactoring...
        await this.selectGroupMenuItem('Forms')
        //After refactoring one more time with  locator in the constructor...
        //await this.page.getByText('Form Layouts').click()
        await this.formLayoutMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datePickerPage(){
        //await this.page.getByText('Forms').click()
        //After refactoring...
        await this.selectGroupMenuItem('Forms')
        //After refactoring one more time with  locator in the constructor...
        //await this.page.waitForTimeout(1000)
        //await this.page.getByText('Datepicker').click()
        await this.datePickerMenuItem.click()
        await this.waitForNumberOfSeconds(2)

    }

    async smartTablePage(){
        //await this.page.getByText('Tables & Data').click()
        //After refactoring...
        await this.selectGroupMenuItem('Tables & Data')
        //After refactoring one more time with  locator in the constructor...
        //await this.page.getByText('Smart Table').click()
        await this.smartTableMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async toastrPage(){
        //await this.page.getByText('Modal & Overlays').click()
        //After refactoring...
        await this.selectGroupMenuItem('Modal & Overlays')
        //After refactoring one more time with  locator in the constructor...
        //await this.page.getByText('Toastr').click()
        await this.toastrMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async tooltipPage(){
        //await this.page.getByText('Modal & Overlays').click()
        //After refactoring...
        await this.selectGroupMenuItem('Modal & Overlays')
        //After refactoring one more time with  locator in the constructor...
        //await this.page.getByText('Tooltip').click()
        await this.tooltipMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()
    }
}