<template>
  <section class="vaside">
      <ul class="vaside-list">
          <li>铁观音</li>
          <li>普洱</li>
          <li>红茶</li>
          <li>绿茶</li>
          <li>大红袍</li>
          <li>黑茶</li>
          <li>龙井茶</li>
          <li>茶具</li>
      </ul>
  </section>
</template>
<script>
export default {
  name:"aside"
}
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.vaside{
    &-list{
        
        width: 100%;
        
        background: white;
        li{
            
            @include singleLineCenter(px2rem(90));
            border-bottom: 1px solid #dddddf;
            text-align: center;
            font-size: px2rem(28);
            font-weight: bold;
            &:hover{
                background: #dedddd;
            }
        }
        
    }
}
</style>
