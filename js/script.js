let counterTabsTitle = document.querySelectorAll('.tabs-title');
    counterTabsTitle.forEach(tabsContentHandler);


function tabsContentHandler (counterTabsTitle) {

    counterTabsTitle.addEventListener('click', function () {

    let liContent = document.querySelector('.li-content')
    let menuAkali = counterTabsTitle.querySelector('.akali');
    let menuAnivia = counterTabsTitle.querySelector('.anivia');
    let menuDraven = counterTabsTitle.querySelector('.draven');
    let menuGaren = counterTabsTitle.querySelector('.garen');
    let menuKatarina = counterTabsTitle.querySelector('.katarina');


    if (menuAkali) {
        liContent.innerHTML = 'Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be\n' +
            '                the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has\n' +
            '                pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her\n' +
            '                message will be heard loud and clear: fear the assassin with no maste\n'
    } else if (menuAnivia) {
        liContent.innerHTML = 'Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect\n' +
            '                the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to\n' +
            '                thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who\n' +
            '                revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her\n' +
            '                being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new\n' +
            '                tomorrow.\n'
    } else if (menuDraven) {
        liContent.innerHTML = 'In Noxus, warriors known as reckoners face one another in arenas where blood is spilled and strength\n' +
            '                tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds\n' +
            '                uniquely appreciated his flair for the dramatic, not to mention the spray of blood from each of his\n' +
            '                spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat\n' +
            '                whomever he must to ensure that his name is chanted throughout the empire forever more.\n'
    } else if (menuGaren) {
        liContent.innerHTML ='A proud and noble soldier, Garen fights at the head of the Dauntless Vanguard. He is popular among his\n' +
            '                fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard\n' +
            '                family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a\n' +
            '                mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a\n' +
            '                veritable whirlwind of righteous steel.\n'
    } else if (menuKatarina) {
        liContent.innerHTML = 'Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest\n' +
            '                daughter to the legendary General Du Couteau, she made her talents known with swift kills against\n' +
            '                unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the\n' +
            '                risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her\n' +
            '                duty amid a whirlwind of serrated daggers.\n'
    } else {
        liContent.innerHTML = 'error';
    }
})



}

tabsContentHandler();

