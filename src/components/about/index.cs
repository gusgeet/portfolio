public class MonedaController : CRUDController<DepositoManager, Deposito, DepositoQueryFilters>
    {
        #region -- Index --

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        [IgnoreAuditAttribute]
        [AuthorizeChildAction("Index")]
        public ActionResult MonedaSearch([DataSourceRequest] DataSourceRequest request)
        {
            return base.Search(new MonedaQueryFilters(request.Page - 1, request.PageSize, TelerikGridHelper.GetSorting(request)), request);
        }

        #endregion

        #region -- Create --

        [Authorize]
        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult MonedaCreate([DataSourceRequest] DataSourceRequest request, Moneda entity)
        {
            return base.Create(request, entity);
        }

        #endregion

        #region -- Update --

        [HttpPost]
        [Authorize]
        public JsonResult MonedaUpdate([DataSourceRequest] DataSourceRequest request, Moneda entity)
        {
            return base.Update(request, entity);
        }

        protected override void SetDataFromUpdateModel(Moneda dbEntity, Moneda model)
        {
            dbEntity.Detalle = model.Detalle;
        }

        #endregion

        #region -- Delete --

        [HttpPost]
        [Authorize]
        public JsonResult MonedaDelete([DataSourceRequest] DataSourceRequest request, Moneda entity)
        {
            return base.Delete(request, entity);
        }

        #endregion
    }